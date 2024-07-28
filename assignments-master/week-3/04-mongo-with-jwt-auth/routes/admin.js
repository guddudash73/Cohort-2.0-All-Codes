const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../../04-mongo-with-jwt-auth/db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });
  res.status(200).json({
    msg: "Admin created sucessfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  const checkUser = Admin.findOne({
    username: username,
    password: password,
  });

  if (checkUser) {
    const token = jwt.sign({ username: username }, JWT_SECRET);
    res.status(200).json({ token });
  } else {
    res.status(403).json({
      msg: "Invalid Credintials",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imgLink = req.body.imgLink;

  let newCourse = await Course.create({
    title: title,
    description: description,
    price: price,
    imgLink: imgLink,
  });

  res.status(200).json({
    msg: `Course created successfully, Course Id: ${newCourse._id}`,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  let allCourse = await Course.find({});
  res.status(200).json({
    allCourse,
  });
});

module.exports = router;
