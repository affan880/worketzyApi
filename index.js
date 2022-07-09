require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.json());
const jobSeekerRouter = require("./routes/jobSeekersDetails");
const jobListRouter = require("./routes/jobListTypes");
const jobs = require("./routes/jobs");
const deleteJobs = require("./routes/deleteJobs");
const editJobs = require("./routes/editJobs");
app.use("/api/jobList", jobListRouter);
app.use("/api/users", jobSeekerRouter);
app.use("/api/jobs", jobs);
app.use("/api/jobs/delete", deleteJobs);
app.use("/api/jobs/edit", editJobs);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});
