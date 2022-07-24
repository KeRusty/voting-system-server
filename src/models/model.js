const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  voteName: {
    required: true,
    type: String,
  },
  voteDescription: {
    required: false,
    type: String,
  },
  votedBy: {
    required: false,
    type: String,
  },
  voteCount: {
    required: false,
    type: Number,
    default: 0,
  },
  createdDate: {
    required: false,
    type: Date,
  },
  updatedDate: {
    required: false,
    type: Date,
  },
});

module.exports = mongoose.model("Data", dataSchema);
