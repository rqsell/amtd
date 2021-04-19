import logo from './logo.svg';
import './App.css';
import Home from "./Home.js";
import Modal from 'react-modal';
import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [modalIsOpen,setModalIsOpen] = useState(false)
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
     <Modal isOpen={modalIsOpen}>
     <div onClick={() => setModalIsOpen(!modalIsOpen)}>X</div>
       <h2>Modal</h2>
       <span> Modal Body</span>
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
