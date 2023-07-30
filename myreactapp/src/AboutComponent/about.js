import './about.css';
import { useState, useEffect } from 'react';
import axios from "axios";
//state : to store data at component level react state is use this data can be access and manupulated at component leble as pr requirement 
// in case of react class based component state is a instance of class which is used to access the data at component lable

//Note :- as function aproach to create component is physible hence state in function component will be manage by using specially design "Hooks Function"  

function About() {

  const [postDetails, setPostDetails] = useState([]); // [] :- hold json data
  useEffect(() => {
    const api_url = "https://jsonplaceholder.typicode.com/posts"
    axios.get(api_url).then((response) => {
      setPostDetails(response.data);
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (

    <>
      {/*<!-- About Start -->*/}
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">Post Details<span class="text-primary">PMS , About Page</span></h1>
            <table class="table table-bordered">
              <tr>
                <th>UserId</th>
                <th>ID</th>
                <th>TItle</th>
                <th>Body</th>
              </tr>
              {
                postDetails.map((row) => (
                  <tr>
                    <td>{row.userId}</td>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.body}</td>
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

export default About;
