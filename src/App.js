import logo from './logo.svg';
import './App.css';
import Home from "./Home.js"

function App() {
  return (
    <div className="App">
     <nav className="navbar">
       <ul>
       <li><img className="logo" src="./logo2.png"/></li>
         <li>Features</li>
         <li>Services</li>
         <li>Support</li>
         <li>Login</li>
       </ul>
     </nav>
     <Home/>
     <footer className="footer">
       <span>
         Last Updated 04/16/2021
       </span>
     </footer>
    </div>
  );
}

export default App;
