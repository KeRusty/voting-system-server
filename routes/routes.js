const express = require("express");
const moment = require("moment");
const Model = require("../models/model");
const router = express.Router();

// add vote
router.post("/addVote", async (req, res) => {
  const data = new Model({
    voteName: req.body.voteName,
    voteDescription: req.body.voteDescription,
    voted: req.body.voted,
    votedBy: req.body.votedBy,
    createdDate: moment(),
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all votes
router.get("/getAllVotes", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get one vote by ID Method
router.get("/getOneVote/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/updateVote/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    updatedData.updatedDate = moment();
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/deleteVote/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Vote with ${data.voteName} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
