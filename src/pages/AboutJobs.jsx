
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import apiJson from "../hooks/apiJson";

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

  return (
    <div>
        {jobs.map((jobs) => {

        return (
          <div className="cardCTN" key={jobs.id}>
            <img src={jobs.image} alt="imageJob" />
            <h5 className="card-title">Position: {jobs.position}</h5>
            <ul>
                <b>Technologies:</b>
                {
                jobs.technologies.map((technologies) => {
                    return (
                    <li>{technologies}</li>
                    );
                })
                }
            </ul>
            <ul>
            <b>Modality:</b>
                {
                jobs.modality.map((modality) => {
                    return (
                    <li>{modality}</li>
                    );
                })
                }
            </ul>
            <h6> <b>Salary:</b> {jobs.salary}</h6>
            <h6> <b>Location:</b> {jobs.location}</h6>
            <p>  <b>Description:</b> {jobs.description}</p>
            <p>  <b>Company:</b> {jobs.company}</p>
            <p>  <b>Working hours:</b> {jobs["working hours"]}</p>
          </div>
        );
      })}
    </div>
  )
}

export default AboutJobs