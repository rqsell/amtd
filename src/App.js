import logo from './logo.svg';
import './App.css';
import Home from "./Home.js";
import Modal from 'react-modal';
import HamburgerMenu from 'react-hamburger-menu'
import React, { useState } from "react";
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
  setOpen(!open);
  setModalIsOpen(!modalIsOpen)}
  

  return (
    <div className="App">
     <nav className="navbar">
       <ul>
       <li><img className="logo" src="./logo2.png"/></li>
         <li className= "one"> <a href="#">Features</a></li>
         <li className="two"> <a href="#">Services</a></li>
         <li className="three"><a href="#">Support</a></li>
         <li className="four" onClick={() => setModalIsOpen(!modalIsOpen)} ><a href="#" >Login</a></li>
         
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
           
     <Modal isOpen={modalIsOpen} className="modal" >
   
     <div className="login">
     <div className="x" onClick={() => setModalIsOpen(!modalIsOpen)}>X</div>
      <form className="form" action="https://c0hcn406.caspio.com/dp/abe590008a7e3f2c55e6418e96d7" method="post">
      
        <p>Username</p>
        <input type= "text" name= "username" placeholder="Enter Username"/>
        <p>Password</p>
        <input type= "text" name= "password" placeholder="Enter Password"/>
        <div>
        <input type= "submit" className="submit" name= "submit" value="Login"/>
        </div>
      </form>
      </div>
     </Modal>
     <BrowserRouter>
       <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
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
