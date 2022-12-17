import '../css/Card_ListJobs.css'
import { Link } from "react-router-dom";
import axios from "axios";

 const Card_ListJobs = ({id,position, technologies, modality, salary, location, description, img}) => {
    const styleLogo = {
      backgroundImage: 'url(' + img + ')'
    }
    function DeleteC(id) {
      axios.delete(`http://localhost:3000/jobs/${id}`)
      window.location.reload()
    }
 
  return (
    <div className="card">
      <div className='cardBody'>
        <div className='img-logo' style={styleLogo}></div>
        {/* <img src={img} alt="imageJob" /> */}
        <h5 className="card-title">Position: {position}</h5>
        <ul>
          <b>Technologies:</b>
          {
            technologies.map((technologies) => {
              return (
                <li> {technologies} / </li>
              );
            })
          }
        </ul>
        <ul>
        <b>Modality:</b>
          {
            modality.map((modality) => {
              return (
                <li> {modality} / </li>
              );
            })
          }
        </ul>
        <h6> <b>Salary:</b> {salary}</h6>
        <h6> <b>Location:</b> {location}</h6>
        <p>  <b>Description:</b> {description}</p>
      </div>
      <Link className='btn btn-danger' to={``} onClick={() =>DeleteC(id)}>Delete</Link>
      <Link className='btn btn-dark' to={`/about-jobs/${id}`}>See more</Link>
   
    </div>
  );
}

export default Card_ListJobs