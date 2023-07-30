import './cpadmin.css';
import axios from 'axios';
import { useState } from 'react';
import { apiurluser } from '../apiurls';


function CPAdmin() {

  const [opassword, setOldPassword] = useState();
  const [npassword, setNewPassword] = useState();
  const [cnpassword, setConfirmNewPassword] = useState();
  const [output, setOutput] = useState("");


  const handleSubmit = () => {

    var userDetails = { "email": localStorage.getItem('email'), "password": opassword };

    axios.get(apiurluser + "fetch?email=" + localStorage.getItem('email') + "&password=" + opassword, userDetails).then((response) => {
      if (response.data.length != 0) {
        if (npassword == cnpassword) {
          let updateDetails = { "condition_obj": { "email": localStorage.getItem('email')}, "content_obj": { "password": cnpassword } };

          axios.patch(apiurluser + "update", updateDetails).then((response) => {
            setOutput("Password Changed Successfully.....");
            setOldPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
          })

        }
        else {
          setOutput("New & Confirm New Password Mismatch");
          setNewPassword("");
          setConfirmNewPassword("");
        }
      }
    }).catch((error) => {
      setOutput("Invalid Old Password");
      setOldPassword("");

    })

  }

  return (
    <>
      {/*<!-- About Start -->*/}
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1 class="display-5 mb-4">Change Password <span class="text-primary">Here!!!</span></h1>

            <font color="blue" size="5">{output}</font>
            <form >
              <br />
              <div class="mb-3">
                <label for="opwd" class="form-label">Old Password :</label>
                <input type="password" class="form-control" placeholder="Enter old password" value={opassword} onChange={e => setOldPassword(e.target.value)} />
              </div>
              <br />
              <div class="mb-3">
                <label for="npwd" class="form-label">New Password :</label>
                <input type="password" class="form-control" placeholder="Enter new password" value={npassword} onChange={e => setNewPassword(e.target.value)} />
              </div>
              <br />
              <div class="mb-3">
                <label for="cnpwd" class="form-label">Confirm New Password :</label>
                <input type="password" class="form-control" placeholder="Enter confirm new password" value={cnpassword} onChange={e => setConfirmNewPassword(e.target.value)} />
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

export default CPAdmin;
