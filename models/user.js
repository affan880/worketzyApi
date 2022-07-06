const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userUniqueId: {
    type: String,
  },
  userImage: {
    type: String,
  },
  userFirstName: {
    type: String,
  },
  userLastName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userBio: {
    type: String,
  },
  userPhone: {
    type: String,
  },
  userIsstudent: {
    type: Boolean,
  },
  userUniversityName: {
    type: String,
  },
  userRecentEmployer: {
    type: String,
  },
  userEmployeeStatus: {
    type: String,
  },
  userEmploymentType: {
    type: String,
  },
  userPreferedCity: {
    type: String,
  },
  userJobType: {
    type: String,
  },
  userJobCategory: {
    type: String,
  },
  userNextJobExpectations: {
    type: String,
  }
});
module.exports = mongoose.model("Users", userSchema);
