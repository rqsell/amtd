import logo from './logo.svg';
import './App.css';
import Carousel from "./components/Carousels"
import Dashboard from "./components/Dashboard"
import HamburgerMenu from 'react-hamburger-menu'
import React, { useState , useEffect} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const[open,setOpen]= useState(false)
const handleClick = () => {
  setOpen(
    !open
  )
}
const loginClick = () => {
  setModalIsOpen(!modalIsOpen)

}
 
  return (
    <div className="App">
     <BrowserRouter>
     <nav className="navbar2">
       <ul>
       <Link to= "/">
       <li><img className="logo" src="./logoblack3.png"/></li>
       </Link>
          <Link to="/Dashboard"  style={{ textDecoration: "none" }}>
                  <li onClick={() => setOpen(!open)}> Dashboard</li>
                  </Link>
         <li className="three"><a href="#">Support</a></li>
         <li className="four" onClick={() => loginClick()} ><a href="#" >Login</a></li>
         
       </ul>
     </nav>
     <HamburgerMenu
     isOpen={open}
       menuClicked={()=> handleClick()}
       className="hamburger"
     />
   
     <ul className="hamburgerMenu" id={open ? "clickedmenu" : ""}>
    
                <Link to="/dashboard">
                  <li onClick={() => setOpen(!open)}> Dashboard</li>
                  </Link>
                  <li onClick={() => setOpen(!open)}>Support</li>
                  <li onClick={() => loginClick() } >Login</li>
              </ul>
           
  {modalIsOpen ? (
     
     <div className="login">
     <div className="x" onClick={() => setModalIsOpen(!modalIsOpen)}>X</div>
      <form className="form" action="https://c0hcn406.caspio.com/dp/abe590008a7e3f2c55e6418e96d7"  method="post">
      <input type="hidden" name="cbUniqueFormId" value="_5b47dcf613cb9f"/>
      <input type="hidden" name="appKey" value="abe590008a7e3f2c55e6418e96d7"/>
      <input type="hidden" name="pathname" value="https://www.amxtdigital.com/"/>
      <input type="hidden" name="ajaxDeploy" value="False"/>
      <input type="hidden" name="PrevPageID" value="0"/>
      <input type="hidden" name="Login" value="1"/>
      <input type="hidden" name="cbPageType" value="Auth"/><input type="hidden" name="cbAP" value="cb"></input>
        <label for="xip_Login_Email"> Username </label>
        <input type= "text" name= "username" placeholder="Enter Username" name="xip_Login_Email" />
        <label for="xip_Login_Password">Password</label>
        <input type="password"  name="xip_Login_Password" placeholder="Enter Password"/>
        <div>
        <input type= "submit" className="submit" name= "submit" value="Login"/>
        </div>
      </form>
      </div>
      ) : null }
  
       <Switch>
          <Route exact path="/" render={(props) => <Carousel {...props} />} />
          <Route exact path="/Dashboard" render={(props) => <Dashboard {...props} />} />
       </Switch>

     <footer className="footer">
       <span>
       Copyright © 2020 Aircraft Maitenance Tracking DigitalPrivacy 
       </span>
     </footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
