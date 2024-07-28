const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username: username,
    password: password,
  });

  res.status(200).json({
    msg: "User created Sucessfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourse = await Course.find({});

  res.status(200).json({
    allCourse,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: { purchasedCourses: courseId },
    }
  );

  res.status(200).json({
    msg: "Purchage complete",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  const result = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.status(200).json({
    result,
  });
});

module.exports = router;
