const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  // const checkUsername = await Admin.findOne({ username: username });
  // const checkPassword = await Admin.findOne({ password: password });
  const checkAdmin = await Admin.findOne({
    username: username,
    password: password,
  });
  if (checkAdmin) {
    next();
  } else {
    res.status(404).json({
      msg: "Admin not found",
    });
  }
}

module.exports = adminMiddleware;
