const mongoose = require("mongoose");
const crypto = require("crypto");
mongoose.set("strictQuery", false);


const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  hash: {
    type: String,
    require: true,
  },
  salt: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Method to set salt and hash the password for a user
UserSchema.methods.setPassword = function (password) {
  // creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString("hex");

  // hashing user's salt and password with 1000 iterations
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
};

// method to check the entered password is correct or not
UserSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);

  return this.hash === hash;
};

const User = (module.exports = new mongoose.model("user", UserSchema));
