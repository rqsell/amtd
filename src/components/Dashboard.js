import React, { useState} from "react";
import '../styles/Dashboard.css'
function Dashboard(props) {
    const [btn, setBtn] = useState(false);
    return (
        <div className= "dashpage">
        <header>
            <h1>What are you looking for today?</h1>
        </header>
            <div className= "dropdown">
            <div>
                <button  onClick={()=> setBtn(!btn)} id={btn ? "clickedbutton" : ""}> Information Options</button>
                </div>
                {btn ? (
                    <div className="containerbutton">

                    <span className="column">
                    <li>AD</li>
                    <li>Aircraft Info</li>
                    <li>Airframe Log Books</li>
                    <li>Airframe Status</li>
                    </span>
                    <br/>
                    <span className="column">
                    <li>APU Log Books</li>
                    <li><a href= "https://c0hcn406.caspio.com/dp/abe59000b2dd4691b640499e9d99">APU Status</a></li>
                    <li>Digital Records</li>
                     </span>
                     <br/>
                     <span className="column">
                     <li>Engine Log Books</li>
                     <li>Engine Status</li>
                    <li>Flight Log</li>
                    <li>SB</li>
                    </span>
                    
                
                </div>
                ) : null}
                
            </div>
        </div>
    );
}

export default Dashboard;