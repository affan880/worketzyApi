const mongoose = require('mongoose');
var uniqueValidator = require("mongoose-unique-validator");
const jobOpeningsSchema = new mongoose.Schema(
  {
    recruiterId: {
      type: string,
      required: true,
    },
    jobsUniqueId: {
      type: Number,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
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
      numberofopenings: {
        type: Number,
      },
      peopleApplied: {
        type: Array,
        subType: Object,
      },
      numberofViews: {
        type: Number,
      },
      points: {
        type: Number,
      },
      numberofPeopleRated: {
        type: Number,
      },
      reviews: {
        type: Array,
        subType: Object,
      },
    },
  },
  {
    timestamps: true,
    timeseries: true,
    
  }
);
jobOpeningsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Jobs', jobOpeningsSchema);