import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurls';

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();

  const [output, setOutput] = useState();

  const handleSubmit = () => {
    var userDetails = { "name": name, "email": email, "password": password, "mobile": mobile, "address": address, "city": city, "gender": gender }
    axios.post(apiurluser + "save", userDetails).then((response) => {
      // console.log(response);
      setOutput("User register sucessfully...");

      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setCity("");
      setMobile("");
    }).catch((error) => {
      console.log(error);
    })

  }

  return (

    <>
      {/*<!-- About Start -->*/}
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">Register<span class="text-primary"> Here!!!</span></h1>
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
                <input type="email" class="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div class="mb-3">
                <label for="pwd" class="form-label">Password :</label>
                <input type="password" class="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
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
                Male <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} /> &nbsp;&nbsp;
                Female <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /> &nbsp;&nbsp;
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

export default Register;
