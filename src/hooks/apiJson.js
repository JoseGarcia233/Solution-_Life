import axios from "axios";

var BASEURL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: BASEURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getJobs() {
    return apiClient.get("/jobs");
  },
  getJobById(jobId) {
    return apiClient.get("/jobs/?id="+jobId);
  },
  postJob(data) {
    return apiClient.post("/jobs"+"", data);
  },
  searchJobs(query){
    return apiClient.get("/jobs?q="+query)
  },
  login(data) {
    return apiClient.get("/login", data);
  },
  register(data) {
    return apiClient.post("/login", data)
  },
  validateUserExists(user){
    return apiClient.get("/login?Email="+user)
  }
};
