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
    required: false,
    type: Date,
  },
  updatedDate: {
    required: false,
    type: Date,
  },
});

module.exports = mongoose.model("Data", dataSchema);
