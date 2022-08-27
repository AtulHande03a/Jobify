const createJob = async (req, res) => {
  await res.send("job created");
};
const deleteJob = async (req, res) => {
  await res.send("job deleted");
};

const getAllJobs = async (req, res) => {
  await res.send("get all jobs");
};

const updateJob = async (req, res) => {
  await res.send("job updated");
};

const showStats = async (req, res) => {
  await res.send("stats shown");
};

export { getAllJobs, createJob, deleteJob, updateJob, showStats };
