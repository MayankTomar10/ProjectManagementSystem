import './AddProject.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurlproject } from '../apiurls';

function AddProject() {
  const [ptitle, setProjectTitle] = useState();
  const [pstream, setProjectStream] = useState();
  const [pdescription, setProjectDescription] = useState();
  const [output, setOutput] = useState();
  const [file, setFile] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();  //it is a prototype  work form data ko attach krna or leke jana
    formData.append("ptitle",ptitle);
    formData.append("pstream",pstream);
    formData.append("pdescription",pdescription);
    formData.append("file",file);


    const config = { // it is header 
      'content-type': 'multipart/form-data' // type file = use this multi/frmdta 
    }

    axios.post(apiurlproject + "save", formData, config).then((response) => {
      setProjectTitle("");
      setProjectStream("");
      setProjectDescription("");
      setOutput("Project Added Successfully...");
    })
  }

  return (

    <>
      {/*<!-- About Start -->*/}
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">Add Project <span class="text-primary">Here!!!</span></h1>
            <font color="blue">{output}</font>
            <form >
              <div class="mb-3 mt-3">
                <label for="ptitle" class="form-label">Project Title :</label>
                <input type="text" class="form-control" value={ptitle} onChange={e => setProjectTitle(e.target.value)} />
              </div>

              <div class="mb-3">
                <label for="pstream" class="form-label" >Project Stream :</label>
                <select class="form-control" value={pstream} onChange={e => setProjectStream(e.target.value)} >
                  <option>Select Stream</option>
                  <option>MEAN Stack</option>
                  <option>MERN Stack</option>
                  <option>JAVA</option>
                  <option>PHP</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="pdescription" class="form-label">Project Description :</label>
                <textarea class="form-control" value={pdescription} onChange={e => setProjectDescription(e.target.value)}></textarea>
              </div>

              <div class="mb-3">
                <label for="pdoc" class="form-label">Project Requirement Document :</label>
                <input type="file" class="form-control" onChange={handleChange} />

              </div>

              <button type="button" onClick={handleSubmit} class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/*<!-- About End -->*/}
    </>

  );
}

export default AddProject;
