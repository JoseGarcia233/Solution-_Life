import axios from "axios";

var BASEURL = "http://localhost:3000/jobs";

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
    return apiClient.get();
  },
  getJobById(jobId) {
    return apiClient.get("/?id="+jobId);
  },
  postJob(data) {
    return apiClient.post('',data);
  }
};
