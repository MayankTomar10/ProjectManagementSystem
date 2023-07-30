import { useState, useEffect } from "react"
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {

  
  const [NavContent, setNavContent] = useState()
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('token') != undefined && localStorage.getItem('role') == "admin") {
        setNavContent(<>
            {/*<!-- Navbar Start -->*/}
      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
          <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0 me-n3">
            <a ><Link to="/"  class="nav-item nav-link active">Admin Home</Link></a>
            <a  ><Link to="/manageusers" class="nav-item nav-link">Manage Users</Link></a>
            <a  ><Link to="/cpadmin" class="nav-item nav-link">Change Password</Link></a>
            <a  ><Link to="/epadmin" class="nav-item nav-link">Edit Profile</Link></a>
            <a  ><Link to="/addproject" class="nav-item nav-link">Add Project</Link></a>
            <a  ><Link to="/logout" class="nav-item nav-link">Logout</Link></a>

          </div>
        </div>
      </nav>
      {/*<!-- Navbar End -->*/}
        </>)
      }
      else if (localStorage.getItem('token') != undefined && localStorage.getItem('role') == "user") {
        setNavContent(<>
            {/*<!-- Navbar Start -->*/}
      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
          <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0 me-n3">
            <a ><Link to="/"  class="nav-item nav-link active">User Home</Link></a>
            <a  ><Link to="/plist" class="nav-item nav-link">Project List</Link></a>
            <a  ><Link to="/logout" class="nav-item nav-link">Logout</Link></a>

          </div>
        </div>
      </nav>
      {/*<!-- Navbar End -->*/}
        </>)
      }
      else {
        setNavContent(<>
            
      {/*<!-- Navbar Start -->*/}
      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
          <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0 me-n3">
            <a ><Link to="/"  class="nav-item nav-link active">Home</Link></a>
            <a ><Link to="/about"  class="nav-item nav-link">About</Link></a>
            <a ><Link to="/contact"  class="nav-item nav-link">Contact</Link></a>
            <a ><Link to="/service"  class="nav-item nav-link">Service</Link></a>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div class="dropdown-menu m-0">
                <a  class="dropdown-item">Blog Grid</a>
                <a  class="dropdown-item">Blog Detail</a>
                <a  class="dropdown-item">The Team</a>
                <a  class="dropdown-item">Testimonial</a>
              </div>
            </div>
            <a  ><Link to="/register" class="nav-item nav-link">Register</Link></a>
            <a  ><Link to="/login" class="nav-item nav-link">Login</Link></a>

          </div>
        </div>
      </nav>
      {/*<!-- Navbar End -->*/}
        </>)

      }
    }, 10);
  },[]);

  return (

    <>
      {NavContent}
    </>

  );
}

export default Nav;
