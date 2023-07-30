import './ProjectList.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurlproject } from '../apiurls';

function ProjectList() {

  const [pDetails, setProjectDetails] = useState([]);

  useEffect(() => {
    axios.get(apiurlproject + "fetch").then((response) => {
      setProjectDetails(response.data);
    }).catch((error) => {
      console.log(error);
    })
  });

  return (

    <>
      {/*<!-- About Start -->*/}
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">View Project List <span class="text-primary">Here!!!</span></h1>

            <table class="table table-bordered" >
              <tr>
                <th> # </th>
                <th> Project Title </th>
                <th> Project Stream </th>
                <th> Project Description </th>
                <th> Project Required Document </th>
                <th></th>
              </tr>

              {
                pDetails.map((row) => (
                  <tr>
                    
                    <td>{row._id} </td>
                    <td>{row.ptitle} </td>
                    <td> {row.pstream} </td>
                    <td> {row.pdescription} </td>
                    <td><a href="/assets/uploads/Project_Requirement_Docs/{row.pdocname}" download="Example-PDF-document"
                    target="_blank" >Download Doc</a></td>
                    
                  </tr>
                ))
              }

            </table>
          </div>
        </div>
      </div>
      {/*<!-- About End -->*/}
    </>

  );
}

export default ProjectList;
