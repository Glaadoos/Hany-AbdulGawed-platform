const express = require("express");
const router = express.Router();
const LessonContainer = require("../models/lesson");

router.get("/:branchname", async (req, res) => {
  try {
    const lessons = await LessonContainer.find();
    const neededLessons = lessons.filter(container => container.BranchName === req.params.branchname)
    res.status(200).json(neededLessons);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:branchname/:order", async (req, res) => {
  const branchName = req.params.branchname;
  const lessonOrder = req.params.order; // Get the order from the request parameters

  try {
    // Find the lesson by its order
    const lessonContainer = await LessonContainer.findOne({
      BranchName: branchName,
    });

    if (!lessonContainer) {
      return res.status(404).send({ message: "Lesson not found" });
    }
    const lesson = lessonContainer.lessons.find(
      (lesson) => lesson.order === lessonOrder
    );

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
    const data = req.body; // Get the data from the request body
    const lessonContainer = new LessonContainer(data);
    await lessonContainer.save();
    res.status(201).json({ message: "lesson created!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:branchname/:order", async (req, res) => {
  const branchName = req.params.branchname;
  const lessonOrder = req.params.order; // Get the order from the request parameters
  const data = req.body; // Get the data from the request body
  try {
    // Find the lesson by its order
    const lessonContainer = await LessonContainer.findOne({
      BranchName: branchName,   
    });
    if (!lessonContainer) {
      return res.status(404).send({ message: "Lesson not found" });
    }
    const lesson = lessonContainer.lessons.find(
      (lesson) => lesson.order === lessonOrder
    );
    if (!lesson) {
      return res.status(404).send({ message: "Lesson not found" });
    }
    // Update the lesson with the new data
    Object.assign(lesson, data);
    await lessonContainer.save();
    res.status(200).send({ message: "lesson updated!" });
  } catch (error) {
    res.status(500).send({ error: error.message }); // Handle any errors
  }
});

module.exports = router;
