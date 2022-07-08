const express = require("express");
const router = express.Router();
const Jobs = require("../models/JobOpenings");

router.get("/", async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const jobs = new Jobs({
    recruiterId: req.body.recruiterId,
    jobsUniqueId: req.body.jobsUniqueId,
    jobs: {
      jobInfo: {
        image: req.body.jobInfo.image,
        jobTitle: req.body.jobInfo.jobTitle,
        jobType: req.body.jobInfo.jobType,
        jobDescription: req.body.jobInfo.jobDescription,
        requiredSkills: req.body.jobInfo.requiredSkills,
        jobRequirements: req.body.jobInfo.jobRequirements,
        jobLocation: req.body.jobInfo.jobLocation,
      },
    },
  });
  try {
    const newJob = await jobs.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// get by id
router.get("/recruiter/:jobsUniqueId", getJobsInfo, (req, res) => {
  try {
    res.send(res.jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/:recruiterId", getRecruiterJobs, (req, res) => {
  try {
    res.send(res.jobs.jobInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getJobsInfo(req, res, next) {
  let jobs;
  try {
    jobs = await Jobs.find({jobsUniqueId:req.params.jobsUniqueId});
    if (jobs == null) {
      return res.status(404).json({ message: "Cannot find list" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.jobs = jobs;
  next();
}
async function getRecruiterJobs(req, res, next) {
  let jobs;
  try {
    jobs = await Jobs.find({recruiterId:req.params.recruiterId});
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