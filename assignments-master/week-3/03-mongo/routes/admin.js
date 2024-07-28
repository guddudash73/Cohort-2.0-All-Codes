const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

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
router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imgLink = req.body.imgLink;

  const newCource = await Course.create({
    title: title,
    description: description,
    price: price,
    imgLink: imgLink,
  });

  res.status(200).json({
    msg: "Course created successfully",
    coursrId: newCource._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCources = await Course.find({});

  res.status(200).json({
    allCources,
  });
});

module.exports = router;
