import { useEffect, useState } from "react";
import CardListJobs from "../components/Card_ListJobs";
import SearchJobs from "../components/SearchJobs";
import apiJson from "../hooks/apiJson";

import "../css/ListJobs.css";
const ListJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const GetJobs = async () => {
      await apiJson
        .getJobs()
        .then(({ data }) => {
          console.log(data);
          setJobs(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    GetJobs();
  }, []);

  return (
    <div className="containerList">
      <div className="searchInput">
       <SearchJobs />
      </div>
      {jobs.map((jobs) => {
        return (
          <div className="cardCTN" key={jobs.id}>
            <CardListJobs
              id={jobs.id}
              position={jobs.position}
              technologies={jobs.technologies}
              modality={jobs.modality}
              salary={jobs.salary}
              location={jobs.location}
              description={jobs.description}
              img={jobs.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListJobs;
