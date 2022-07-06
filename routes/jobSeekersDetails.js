const express = require("express");
const router = express.Router();
const List = require("../models/user");

router.get('/', async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const list = new List({
    userUniqueId: req.body.userUniqueId,
    userImage: req.body.userImage,
    userFirstName: req.body.userFirstName,
    userLastName: req.body.userLastName,
    userEmail: req.body.userEmail,
    userBio: req.body.userBio,
    userPhone: req.body.userPhone,
    userIsstudent: req.body.userIsstudent,
    userUniversityName: req.body.userUniversityName,
    userRecentEmployer: req.body.userRecentEmployer,
    userEmployeeStatus: req.body.userEmployeeStatus,
    userEmploymentType: req.body.userEmploymentType,
    userPreferedCity: req.body.userPreferedCity,
    userJobType: req.body.userJobType,
    userJobCategory: req.body.userJobCategory,
    userNextJobExpectations: req.body.userNextJobExpectations
  });
  try {
    const newList = await list.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;