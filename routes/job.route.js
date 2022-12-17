const express = require("express");
const { JobController } = require("../controllers/job.controller");

const JobRouter = express.Router();

JobRouter.get("/getjobs", JobController.GetJobs);

JobRouter.post("/addjobs", JobController.addJobs);
JobRouter.get("/search",JobController.SearchData)

// UserRouter.get("/getProfile",Authentication, EmiController.GetProfile);
module.exports = {
  JobRouter,
};
