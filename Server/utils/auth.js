const jwt = require("jsonwebtoken");

function generateAuthToken(user) {
  const token = jwt.sign({ _id: user._id }, "your-secret-key-here");
  user.tokens = user.tokens.concat({ token });
  return token;
}

function authenticateJWT(req, res, next) {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, "your-secret-key-here");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ error: "Authentication failed" });
  }
}
function renewJWT(req, res, next) {
	console.log('renewing JWT')
	next()
}
function revokeJWT(req, res, next) {
	console.log('revoking JWT')
	next()
}

module.exports = {
  generateAuthToken,
  authenticateJWT,
	renewJWT,
	revokeJWT
};
