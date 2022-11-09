import { useEffect, useState } from "react";
import CardListJobs from "../components/Card_ListJobs";
import apiJson from "../hooks/apiJson";

import "../css/ListJobs.css";
const ListJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const GetJobs = async () => {
      await apiJson
        .getJobs()
        .then(({ data }) => {
          setJobs(data);
        })
        .catch((error) => {
          console.log(error);
        });
      };
      GetJobs();
    }, []);
    
    useEffect(() => {
      const GetJobs = async () => {
        await apiJson
        .searchJobs(search)
        .then(({ data }) => {
          setJobs(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    GetJobs();
  }, [search]);

  return (
    <div className="containerList">
      <div className="searchInput">
        <input className="form-control input-search" 
        onChange={(event) => setSearch(event.target.value)} type="text" placeholder=" 🔍 Search"/>
      </div>
      {
        jobs.length === 0 && 
        <>
          <p className="txtNoResult"> <b> No results </b> </p>
        </>
      }
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
