const mongoose = require('mongoose');

const jobOpeningsSchema = new mongoose.Schema({
  recruiterId: {
    type: String,
    required: true,
  },
  jobsUniqueId: {
    type: String,
    required: true,
    unique: true,
  },
    jobInfo: {
    image: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    jobType: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
    requiredSkills: {
      type: String,
    },
    jobRequirements: {
      type: String,
    },
    jobLocation: {
      type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Jobs', jobOpeningsSchema);

{
  /*
image: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    jobType: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
    requiredSkills: {
      type: String,
    },
    jobRequirements: {
      type: String,
    },
    jobLocation: {
      type: String,
    }, 
*/
}