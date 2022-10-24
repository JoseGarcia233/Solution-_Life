import "../css/AddJobs.css"
import apiJson from "../hooks/apiJson";
import { useState } from "react";
const AddJobs = () => {

    const [position, setPosition] = useState("")
    const [technologie, setTechnologie] = useState("")
    const [modality, setModality] = useState("")
    const [salary, setSalary] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [company, setCompany] = useState("")
    const [working_hours, setWorkingHours] = useState([])

    var FormData = require('form-data');
    var dataJob = new FormData();
    dataJob.append('position', position);
    dataJob.append('technologies[]', technologie);
    dataJob.append('modality[]', modality);
    dataJob.append('salary', salary);
    dataJob.append('location', location);
    dataJob.append('description', description);
    dataJob.append('image', image);
    dataJob.append('company', company);
    dataJob.append('working_hours', working_hours);

    const GetJobs =  (dataJob) => {
        console.log('datooood',dataJob)
        apiJson
        .postJob(dataJob)
        .then(({ data }) => {
        console.log(data);
        })
        .catch((error) => {
        console.log(error);
        });
    };

    const submitForm = (e) => {
        e.preventDefault()
        GetJobs(dataJob)
        window.location.href = '/List-jobs'
    }

  return (
    <form onSubmit={submitForm} className="form-Add-Job">
        <div className="form-group">
            <label className="form-label" htmlFor="position">Position</label>
            <input className="form-control" type="text" id="position" required
            
            onChange={(event) => setPosition(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="technologies">Technologies</label>
            <input className="form-control" type="text" id="technologies" required
            
            onChange={(event) => setTechnologie(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="modality">Modality</label>
            <input className="form-control" type="text" id="modality" required
            
            onChange={(event) => setModality(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="salary">Salary</label>
            <input className="form-control" type="text" id="salary" required
            
            onChange={(event) => setSalary(event.target.value)}
            />

        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="location">Location</label>
            <input className="form-control" type="text" id="location" required
            
            onChange={(event) => setLocation(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="description">Description</label>
            <input className="form-control" type="text" id="description" required
            
            onChange={(event) => setDescription(event.target.value)}
            />
        </div>
        
        <div className="form-group">
            <label className="form-label" htmlFor="image">Image</label>
            <input className="form-control" type="text" id="image" required
            
            onChange={(event) => setImage(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="company">Company</label>
            <input className="form-control" type="text" id="company" required
            
            onChange={(event) => setCompany(event.target.value)}
            />
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="working_hours">Working hours</label>
            <input className="form-control" type="text" id="working_hours" required
            
            onChange={(event) => setWorkingHours(event.target.value)}
            />
        </div>  

        <button type="submit" className="btn btn-dark">Post job</button>
    </form>
  )
}
export default AddJobs;