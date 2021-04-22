import React from 'react';
import "./Home.css"

function Home(props) {
    return (
        <div>
       {/* For Mobile */}
       <div >
       <h1 className= "header">Aircraft Maintenance Tracking Digital</h1>
       
           
         
       <div className="container">
         <img src="./jetimg2.jpg" className="airplane"/>
         
         {/* Textbox for Mobile */}
         <div className= "mobiletextbox">
       <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a sem felis. Fusce placerat nisi dictum elit condimentum, id ornare velit lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi at dolor feugiat nunc luctus semper non ac ligula. Duis eu urna pharetra nisi lacinia venenatis. Aenean maximus consectetur arcu, eu varius leo hendrerit ut. Quisque varius orci id sapien tincidunt, quis maximus tellus posuere.</span>
       </div>  
    
    {/* Overlay for Desktop */}
         <div class="overlay overlayLeft">
         <div className="textOverlay">
           <h1>Aircraft Maintenance Tracking Digital</h1>
           <div className= "about">
             <h2> About Us</h2>
             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a sem felis. Fusce placerat nisi dictum elit condimentum, id ornare velit lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi at dolor feugiat nunc luctus semper non ac ligula. Duis eu urna pharetra nisi lacinia venenatis. Aenean maximus consectetur arcu, eu varius leo hendrerit ut. Quisque varius orci id sapien tincidunt, quis maximus tellus posuere.</span>
           </div>
         </div>
         </div>
       </div>
     
            
        </div>
        </div>
    );
}

export default Home;