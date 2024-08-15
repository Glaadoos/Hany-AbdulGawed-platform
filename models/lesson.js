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
  parts: [PartSchema],
  exams: [ExamSchema],
});

const LessonContainerSchema = new mongoose.Schema({
  BranchName: {
    type: String,
    required: true,
  },
  lessons: [LessonSchema],
});

const LessonContainer = mongoose.model("lessons", LessonContainerSchema);

module.exports = LessonContainer;
