const User = require("../Schemas/authentication/signUp");
const token = require("../config/jwtConfig");
const messages = require("../constant/messages");

const { addedSuccess, faildToAdd, signInSuccess, userNotFound, wrongPassword } =
  messages;

const signIn = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user === null) {
      return res.status(400).send({
        message: { userNotFound },
      });
    } else {
      if (user.validPassword(req.body.password)) {
        return res.status(201).json({
          accessToken: token(user),
          message: { signInSuccess },
        });
      } else {
        return res.status(400).send({
          message: { wrongPassword },
        });
      }
    }
  });
};

const signUp = (req, res, next) => {
  // create an empty user object
  let newUser = new User();

  // init new user Object with request data
  (newUser.fullName = req.body.fullName),
    (newUser.email = req.body.email),
    (newUser.phone = req.body.phone),
    (newUser.password = req.body.password);

  // call setPassword function to hash password
  newUser.setPassword(req.body.password);

  // save the userobject in database
  newUser.save((err, User) => {
    if (err) {
      return res.status(400).json({
        message: { faildToAdd },
      });
    } else {
      return res.status(201).json({
        accessToken: token(User),
        message: { addedSuccess },
      });
    }
  });
};

module.exports = { signIn, signUp };
