const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Course, User } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });
  res.status(200).json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  const checkUser = await User.find({
    username: username,
    password: password,
  });

  if (checkUser) {
    const token = jwt.sign({ username: username }, JWT_SECRET);
    res.status(200).json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "User not found",
    });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  res.status(200).json({
    allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  let username = req.username;
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: { purchasedCourses: courseId },
    }
  );

  res.status(200).json({
    msg: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.username });
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
