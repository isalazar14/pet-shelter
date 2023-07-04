const mongoose = require("mongoose");

const Pet = require("./Models/Pet");

const petsData = [
  {
    name: "Buddy",
    animalType: "dog",
    description:
      "Buddy is a friendly and playful dog. He has a shiny black coat and loves going for long walks.",
    skills: ["Sit", "Fetch"],
  },
  {
    name: "Whiskers",
    animalType: "cat",
    description:
      "Whiskers is an independent and curious cat. She has a tabby coat with beautiful green eyes.",
    skills: ["Pounce", "Climb"],
  },
  {
    name: "Goldie",
    animalType: "fish",
    description:
      "Goldie is a bright orange goldfish. She gracefully glides through the water in her fish tank.",
    skills: ["Follow finger"],
  },
  {
    name: "Rocky",
    animalType: "hamster",
    description:
      "Rocky is an energetic and inquisitive hamster. He has a soft fur coat and loves running on his wheel.",
    skills: ["Run", "Hide"],
  },
  {
    name: "Moo",
    animalType: "cow",
    description:
      "Moo is a friendly cow with a black and white spotted coat. She enjoys grazing in the fields.",
    skills: ["Moo", "Chew"],
  },
  {
    name: "Spike",
    animalType: "reptile",
    description:
      "Spike is a calm and docile snake with a vibrant pattern on his scales. He likes to bask under a heat lamp.",
    skills: ["Slither", "Shed Skin"],
  },
  {
    name: "Luna",
    animalType: "dog",
    description:
      "Luna is an intelligent and loyal dog. She has a fluffy white coat and enjoys playing frisbee.",
    skills: ["Sit", "Fetch"],
  },
  {
    name: "Mittens",
    animalType: "cat",
    description:
      "Mittens is a gentle and affectionate cat. She has a tuxedo coat and loves to curl up on the couch.",
    skills: ["Purr", "Lounge"],
  },
  {
    name: "Nemo",
    animalType: "fish",
    description:
      "Nemo is a vibrant clownfish with orange and white stripes. He explores the coral reefs with his friends.",
    skills: ["Swim", "Hide"],
  },
  {
    name: "Nibbles",
    animalType: "hamster",
    description:
      "Nibbles is a tiny and curious hamster. He has a caramel-colored coat and enjoys nibbling on seeds.",
    skills: ["Run", "Dig"],
  },
];

mongoose
  .connect("mongodb://localhost/beltExamPets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((connection) =>{
		console.log("Connected to database. Now seeding...")
    Pet.insertMany(petsData)
		.then(() => {
      console.log("Database seeded successfully");
      connection.close(() => console.log("Database connection closed."));
    })
		.catch(err => {
			console.error('Error inserting data:', err)
		})
  })
	.catch(err => console.err("Error connecting to database: ", err))
