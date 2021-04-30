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
                <button  onClick={()=> setBtn(!btn)}>Options</button>
                <ul >
                    <li>AD</li>
                    <li>Aircraft Info</li>
                    <li>Airframe Log Books</li>
                    <li>Airframe Status</li>
                    <li>APU Log Books</li>
                    <li>APU Status</li>
                     <li>Digital Records</li>
                     <li>Engine Log Books</li>
                     <li>Engine Status</li>
                    <li>Flight Log</li>
                    <li>SB</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;