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
  voted: {
    required: true,
    type: Boolean,
  },
  votedBy: {
    required: true,
    type: String,
  },
  createdDate: {
    required: true,
    type: Date,
  },
  updatedDate: {
    required: true,
    type: Date,
  },
});

module.exports = mongoose.model("Data", dataSchema);
