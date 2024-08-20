const express = require("express");
const router = express.Router();
const Lesson = require("../models/lesson");

router.get("/:branch", async (req, res) => {
  try {
    const lessons = await Lesson.find({branch: req.params.branch});
    res.status(200).json(lessons);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:branch/:order", async (req, res) => {
  const branch = req.params.branch;
  const lessonOrder = req.params.order; // Get the order from the request parameters

  try {
    // Find the lesson by its order
    const lesson = await Lesson.findOne({
      branch: branch,
      order: lessonOrder,
    });

    if (!lesson) {
      return res.status(404).send({ message: "Lesson not found" });
    }
    res.status(200).send(lesson); // Send the found lesson back to the client
  } catch (error) {
    res.status(500).send({ error: error.message }); // Handle any errors
  }
});

router.post("/", async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.status(201).json({ message: "lesson created!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:branch/:order", async (req, res) => {
  const branch = req.params.branch;
  const lessonOrder = req.params.order;
  const data = req.body;
  try {
    const lesson = await Lesson.findOne({ branch: branch, order: lessonOrder });
    if (!lesson) {
      return res.status(404).send({ message: "Lesson not found" });
    }
    Object.assign(lesson, data);
    await lesson.save();
    res.status(200).send({ message: "lesson updated!" });
  } catch (error) {
    res.status(500).send({ error: error.message }); 
  }
});

module.exports = router;
