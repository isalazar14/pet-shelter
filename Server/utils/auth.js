const jwt = require("jsonwebtoken"),
  crypto = require("crypto"),
  db = require("../utils/db"),
  accessTokenSecret = process.env.AUTH_TOKEN_SECRET,
  refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

function generateAccessToken(user) {
  const payload = {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    tokenOptions = {
      // subject: user._id,
      expiresIn: "1h",
      jwtid: crypto.randomBytes(16).toString("hex"),
    };
  const token = jwt.sign(payload, accessTokenSecret, tokenOptions);
  return token;
}

async function generateRefreshToken(user) {
  const payload = { _id: user._id },
    tokenOptions = {
      expiresIn: "30d",
      jwtid: crypto.randomBytes(16).toString("hex"),
    };
  const token = jwt.sign(payload, refreshTokenSecret, tokenOptions);
  return token;
}

function authenticateJWT(req, res, next) {
  const authHeader = req.header("Authorization"),
    token = authHeader?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Auth token missing." });

  jwt.verify(token, accessTokenSecret, (error, decodedToken) => {
    if (error) {
      if (error.name == "TokenExpiredError") {
        return handleExpiredAccessToken(req, res, next);
      }
      res.status(403).json({ error: "Authentication failed" });
    }
    req.token = decodedToken;

    const currentTimestamp = Math.floor(Date.now() / 1000);  // Current timestamp in seconds.
    if (token.exp - currentTimestamp < 600) {  // 600 seconds = 10 minutes.
        // This means token is about to expire in less than 10 minutes. Issue a new one.
        const user = db.User.findOne({_id: token._id})
        const newToken = generateAccessToken(user);
        res.setHeader('Authorization', `Bearer ${newToken}`);
    }
    next();
  });
}

async function handleExpiredAccessToken(req, res, next) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken)
    return res
      .status(401)
      .json({ error: "Token expired and no refresh token." });

  jwt.verify(refreshToken, refreshTokenSecret, async (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }

    const tokenInDb = await db.RefreshToken.findOne({
      token: refreshToken,
    }).populate("user");
    if (!tokenInDb)
      return res.status(403).json({ error: "Refresh token not in database." }); // Refresh token is not valid or was revoked.

    // Generate new access and refresh tokens.
    const accessToken = generateAccessToken(tokenInDb.user);
    const newRefreshToken = generateRefreshToken(tokenInDb.user);
    try {
      await db.RefreshToken.create({ token: newRefreshToken, user: user._id });
    } catch (error) {
      // console.error(error);
      res.status(400).json({message: "Failed to save refresh token to db. Token discarded, try again."})
    }
    try {
      await tokenInDb.remove()
    } catch (error) {
      console.error("Old token not deleted. ID:", tokenInDb._id);
    }
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
    });
    res.json({
      message: 'Updated access and refresh tokens',
      accessToken,
      // refreshToken: newRefreshToken
    });
  });
}

function revokeAccessToken(req, res, next) {
  console.log("revoking JWT");
  next();
}
function revokeRefreshToken(req, res, next) {
  console.log("revoking JWT");
  next();
}

module.exports = {
  // generateAccessToken,
  authenticateJWT,
  // handleExpiredAccessToken,
  // revokeAccessToken,
  // revokeAccessToken,
};
