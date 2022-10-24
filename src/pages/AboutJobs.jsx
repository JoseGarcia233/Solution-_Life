import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import apiJson from "../hooks/apiJson";

import "../css/AboutJobs.css";

const AboutJobs = () => {
  const [jobs, setJobs] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    const GetJobs = async () => {
      await apiJson
        .getJobById(id)
        .then(({ data }) => {
          console.log(data);
          setJobs(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    GetJobs();
  }, [id]);

//functions
  const BackToPage = () => {
    window.history.back();
  }

  const ApplyJob = () => {
    alert("Aplicaste a este trabajo")
  }

  return (
    <div className="ctnDetail">
      {jobs.map((jobs) => {
        return (
          <div className="CardDetail" key={jobs.id}>
            <div>
              <button onClick={BackToPage} className="btn btn-danger">X</button>
            </div>

            <img src={jobs.image} alt="imageJob" />

            <div className="infotCardDetail">
              <h5 className="card-title">Position: {jobs.position}</h5>
              <ul>
                <b>Technologies:</b>
                {jobs.technologies.map((technologies) => {
                  return <li>{technologies}</li>;
                })}
              </ul>
              <ul>
                <b>Modality:</b>
                {jobs.modality.map((modality) => {
                  return <li>{modality}</li>;
                })}
              </ul>
              <h6>
                <b>Salary:</b> {jobs.salary}
              </h6>
              <h6>
                <b>Location:</b> {jobs.location}
              </h6>
              <p>
                <b>Description:</b> {jobs.description}
              </p>
              <p>
                <b>Company:</b> {jobs.company}
              </p>
              <p>
                <b>Working hours:</b> {jobs.working_hours}
              </p>
            </div>

            <div className="btnsDetail">
              <button onClick={ApplyJob} className="btn btn-dark">Apply</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutJobs;
