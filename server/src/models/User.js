const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  mistakeType: {
    type: String,
    default: "none",
  },
  logicScore: {
    type: Number,
    default: 100,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  errorDNA: {
    loopBoundary: { type: Number, default: 0 },
    recursionError: { type: Number, default: 0 },
    conditionMismatch: { type: Number, default: 0 },
  },
  sessions: [sessionSchema],
});

module.exports = mongoose.model("User", userSchema);
