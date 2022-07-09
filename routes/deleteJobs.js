const express = require("express");
const router = express.Router();
const Jobs = require("../models/JobOpenings");

router.delete("/:recruiterId/:jobsUniqueId", deleteAJob, (req, res) => {
  try {
    res.send(res.jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/:recruiterId/", deleteAllJobs, (req, res) => {
  try {
    res.send(res.jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function deleteAllJobs(req, res, next) {
  let jobs;
  try {
    jobs = await Jobs.deleteMany({
      recruiterId: req.params.recruiterId,
    });
    if (jobs == null) {
      return res.status(404).json({ message: "Cannot find list" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.jobs = jobs;
  next();
}
async function deleteAJob(req, res, next) {
  let jobs;
  try {
    jobs = await Jobs.deleteOne({
      recruiterId: req.params.recruiterId,
      jobsUniqueId: req.params.jobsUniqueId,
    });
    if (jobs == null) {
      return res.status(404).json({ message: "Cannot find list" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.jobs = jobs;
  next();
}

module.exports = router;
