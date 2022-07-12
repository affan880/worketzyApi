const mongoose = require('mongoose');

const jobOpeningsSchema = new mongoose.Schema(
  {
    recruiterId: {
      type: String,
      required: true,
    },
    jobsUniqueId: {
      type: String,
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