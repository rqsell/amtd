import logo from './logo.svg';
import './App.css';

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
     <body>
       <container>
         <img src="./airplane.jpg" className="airplane"/>
       </container>
     </body>
    </div>
  );
}

export default App;
