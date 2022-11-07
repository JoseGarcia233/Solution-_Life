import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import apiJson from "../hooks/apiJson";
import Swal from "sweetalert2"
   
import "../css/AboutJobs.css";

const AboutJobs = () => {
  const [jobs, setJobs] = useState([]);
  let loginVerify = window.localStorage.getItem("loginDataSolutionLife")

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
  const successAlert = () =>{
    Swal.fire({
      icon: 'success',
      title: "Aplicaste a este trabajo",
      showConfirmButton: false,
      timer: 1500
    })
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
              {
                !loginVerify &&  
                <div className="warning">
                  <p>
                    <b>WARNING: </b>
                    In order to apply for a vacancy you must register or log in with your account already created
                  </p>
                  <Link className="btn btn-outline-danger" to="/login">
                    Login
                  </Link>
                </div>
              }
            </div>
              {
                loginVerify &&  
                <div className="btnsDetail">
                  <button onClick={successAlert} className="btn btn-dark">Apply</button>
                </div>
              }
          </div>
        );
      })}
    </div>
  );
};

export default AboutJobs;
