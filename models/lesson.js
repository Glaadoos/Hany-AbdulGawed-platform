const mongoose = require("mongoose");

const AttachmentSchema = new mongoose.Schema({
  notebook: {
    type: String,
    required: false,
  },
  homework: {
    type: String,
    required: false,
  },
});

const PartSchema = new mongoose.Schema({
  lessonName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  duration: {
    type: String,
  },
  attachments: {
    type: AttachmentSchema,
    required: false,
  },
});

const ExamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

const LessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  order: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  parts: [PartSchema],
  exams: [ExamSchema],
});

const Lesson = mongoose.model("lessons", LessonSchema);

module.exports = Lesson;
