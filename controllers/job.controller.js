const { JobModel } = require("../model/job.model");
const GetJobs = async (req, res) => {
  const Job = await JobModel.find();

  res.send({Job});
};
const SearchData= async(req,res)=>{
  // (name = { name: { $regex: "^" + q.product_name, $options: "i" } })
  var q = req?.query;
  const Job =q?await JobModel.find({language:{ $regex: "^" + q.language, $options: "i" }}):await JobModel.find()

  res.send({Job});
}
const addJobs = async (req, res) => {
  //   console.log(req);
  const { company,city,location,role,level,position,language,contract } = req.body;
  var myDate = new Date();
  // console.log(myDate)
  const new_Job = new JobModel({
    company:company,
    city: city,
    location:location,
    role:role,
    level:level,
    position: position,
    language: language,
    contract: contract,
    postedAt:myDate
  });
  await new_Job.save();
  res.send({ msg: "data added succesfully!" });
};

const JobController = {
  addJobs,
  GetJobs,
  SearchData
};

module.exports = {
 
  JobController,
};
