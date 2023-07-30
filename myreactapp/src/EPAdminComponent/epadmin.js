import './epadmin.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurls';



function EPAdmin() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios.get(apiurluser + "fetch?email=" + localStorage.getItem('email')).then((response) => {
      var data = response.data[0];
      setOutput("Edit Details for Profile Changes ");

      setName(data.name);
      setEmail(data.email);
      setAddress(data.address);
      setCity(data.city);
      setMobile(data.mobile);
      setGender(data.gender)
    }).catch((error) => {
      console.log(error);
    })
  },[]);

  const handleSubmit = () => {
    
    let updateDetails = { "condition_obj": { "email": email }, "content_obj": { "name": name, "mobile": mobile, "address": address, "city": city, "gender": gender }};

      axios.patch(apiurluser + "update", updateDetails).then((response) => {
        setOutput("Profile Edited Successfully....")
      })
  }

  return (
    <>
      {/*<!-- About Start -->*/}
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">Edit Profile <span class="text-primary">Here!!!</span></h1>
            <font color="blue">{output}</font>

            <form >
              <div class="mb-3 mt-3">
                <label for="name" class="form-label">Name :</label>
                <input type="text" class="form-control" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                {/*e= current field ka refrence
                   setName : state updating function */}
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email :</label>
                <input readonly="true" type="email" class="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div class="mb-3">
                <label for="mobile" class="form-label">Mobile :</label>
                <input type="text" class="form-control" placeholder="Enter mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Address :</label>
                <textarea class="form-control" placeholder="Enter address" value={address} onChange={e => setAddress(e.target.value)}></textarea>
              </div>
              <div class="mb-3">
                <label for="city" class="form-label" >City :</label>
                <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
                  <option>Select City</option>
                  <option>Indore</option>
                  <option>Bhopal</option>
                  <option>Ujjain</option>
                  <option>Dewas</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label">Gender : </label>  &nbsp;&nbsp;
                Male <input  type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} /> &nbsp;&nbsp;
                Female <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /> &nbsp;&nbsp;

                {gender=="male" && <span>male_chacked</span>}
                {gender=="female" && <span>female_chacked</span>}
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

export default EPAdmin;
