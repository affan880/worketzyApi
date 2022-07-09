const express = require("express");
const router = express.Router();
const Jobs = require("../models/JobOpenings");

router.put("/details/:recruiterId/:jobsUniqueId", updateImage, (req, res) => {
  try {
    res.send(res.jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
async function updateImage(req, res, next) {
    let jobs;
    try {
      const id = req.params.id;
        jobs = await Jobs.updateOne(
            { recruiterId: req.params.recruiterId, jobsUniqueId: req.params.jobsUniqueId },
            {
                $set: {
                    'jobInfo.image': req.body.image,
                    'jobInfo.jobTitle': req.body.jobTitle,
                    'jobInfo.jobType': req.body.jobType,
                    'jobInfo.jobDescription': req.body.jobDescription,
                    'jobInfo.requiredSkills': req.body.requiredSkills,
                    'jobInfo.jobRequirements': req.body.jobRequirements,
                    'jobInfo.jobLocation': req.body.jobLocation,
                }
            },
        );
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
