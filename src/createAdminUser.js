// createAdminUser.js
const bcrypt = require("bcrypt");

const saltRounds = 10;
const adminPassword = "admin"; // Replace this with the chosen password

bcrypt.hash(adminPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);
  // Save `hash` to your environment variable or database
});
