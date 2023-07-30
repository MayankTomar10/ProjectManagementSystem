import './App.css';
import {Routes, Route} from 'react-router-dom';

import Header from './HeaderComponent/header';
import Nav from './NavComponent/nav';
import Slider from './SliderComponent/slider';
import Footer from './FooterComponent/footer';

import Home from './HomeComponent/home';
import About from './AboutComponent/about'
import Contact from './ContactComponent/contact';
import Service from './ServiceComponent/service';
import Register from './RegisterComponent/register';
import Login from './LoginComponent/Login';

import Adminhome from './AdminHomeComponent/adminhome';
import Userhome from './UserHomeComponent/userhome';
import ProjectList from './ProjectListComponent/ProjectList';
import Logout from './LogoutComponent/Logout';
import Manageusers from './ManageusersComponent/manageusers';
import Varifyuser from './VarifyuserComponent/varifyuser';
import CPAdmin from './CPAdminComponent/cpadmin';
import EPAdmin from './EPAdminComponent/epadmin';
import AddProject from './AddProjectComponent/AddProject';
function App(){
  return (
      <>
        <Header/>
        <Nav/>
        <Slider/>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/admin" element={<Adminhome/>}></Route>
          <Route path="/user" element={<Userhome/>}></Route>
          <Route path="/plist" element={<ProjectList/>}></Route>
          

          <Route path="/manageusers" element={<Manageusers/>}></Route>
          <Route path="/varifyuser/:email" element={<Varifyuser/>}></Route>
          <Route path="/cpadmin" element={<CPAdmin/>}></Route>
          <Route path="/epadmin" element={<EPAdmin/>}></Route>
          <Route path="/addproject" element={<AddProject/>}></Route>



        </Routes>
        <Footer/>

        {/*<!-- Back to Top -->*/}
        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>
  </>
  );
}

export default App;
