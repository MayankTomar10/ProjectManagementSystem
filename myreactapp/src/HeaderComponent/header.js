import './header.css';
import { useState, useEffect } from "react"
function Header() {

  const [HeaderContent, setHeaderContent] = useState()
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('token') != undefined && localStorage.getItem('role') == "admin") {
        setHeaderContent(<>
          {/*<!-- Topbar Start -->*/}
          <div class="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
            <div class="row gx-0">
              <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">

              </div>
              <div class="col-md-6 text-center text-lg-end">
                <div
                  class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                  <div class="me-3 pe-3 border-end py-2">
                    <p class="m-0"><i class=""></i>Welcome Admin</p>
                  </div>
                  <div class="py-2">
                    <p class="m-0"><i class="fa fa-envelope-open me-2 "></i>{localStorage.getItem('email')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Topbar End -->*/}
        </>)
      }
      else if (localStorage.getItem('token') != undefined && localStorage.getItem('role') == "user") {
        setHeaderContent(<>
          {/*<!-- Topbar Start -->*/}
          <div class="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
            <div class="row gx-0">
              <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">

              </div>
              <div class="col-md-6 text-center text-lg-end">
                <div
                  class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                  <div class="me-3 pe-3 border-end py-2">
                    <p class="m-0"><i class=""></i>Welcome User
                    </p>
                  </div>
                  <div class="py-2">
                    <p class="m-0"><i class="fa fa-envelope-open me-2 "></i>{localStorage.getItem('email')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Topbar End -->*/}
        </>)
      }
      else {
        setHeaderContent(<>
          {/*<!-- Topbar Start -->*/}
          <div class="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
            <div class="row gx-0">
              <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center">
                  <a class="text-body py-2 pe-3 border-end" href=""><small>FAQs</small></a>
                  <a class="text-body py-2 px-3 border-end" href=""><small>Support</small></a>
                  <a class="text-body py-2 px-3 border-end" href=""><small>Privacy</small></a>
                  <a class="text-body py-2 px-3 border-end" href=""><small>Policy</small></a>
                  <a class="text-body py-2 ps-3" href=""><small>Career</small></a>
                </div>
              </div>
              <div class="col-md-6 text-center text-lg-end">
                <div
                  class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                  <div class="me-3 pe-3 border-end py-2">
                    <p class="m-0"><i class="fa fa-envelope-open me-2"></i>info@example.com</p>
                  </div>
                  <div class="py-2">
                    <p class="m-0"><i class="fa fa-phone-alt me-2"></i>xxx xxx xxxx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Topbar End -->*/}
        </>)

      }
    }, 10);
  },[]);
  return (

    <>
      {HeaderContent}
    </>


  );
}

export default Header;
