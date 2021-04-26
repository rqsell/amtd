import logo from './logo.svg';
import './App.css';
import Home from "./Home.js";
import Carousel from "./Carousels"
import HamburgerMenu from 'react-hamburger-menu'
import React, { useState , useEffect} from "react";
import UseScripts from "./hooks/UseScripts"
import {
  BrowserRouter,
  Switch,
  Route,
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

  // UseScripts('https://c0hcn406.caspio.com/dp/abe590008a7e3f2c55e6418e96d7');
}
 
  return (
    <div className="App">
     <nav className="navbar2">
       <ul>
       <li><img className="logo" src="./logo2.png"/></li>
         <li className= "one"> <a href="#">Features</a></li>
         <li className="two"> <a href="#">Services</a></li>
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
    
                  <li onClick={() => setOpen(!open)}>Features</li>
                  <li onClick={() => setOpen(!open)}> Services</li>
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
     <BrowserRouter>
       <Switch>
          <Route exact path="/" render={(props) => <Carousel {...props} />} />
       </Switch>
     </BrowserRouter>
     <footer className="footer">
       <span>
       Copyright © 2020 AMxTD Privacy
       </span>
     </footer>
    
    </div>
  );
}

export default App;
