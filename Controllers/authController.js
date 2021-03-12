const User = require("../Model/User");

function signup_get(req, res) {
  res.send("signup_get");
}

async function signup_post(req, res) {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
}

function login_get(req, res) {
  res.send("login_get");
}

function login_post(req, res) {
  res.send("login_post");
}

module.exports.signup_get = signup_get;
module.exports.signup_post = signup_post;
module.exports.login_get = login_get;
module.exports.login_post = login_post;
