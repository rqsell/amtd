import React from 'react';

function Home(props) {
    return (
        <div>
      
       <div className="container">
         <img src="./airplane.jpg" className="airplane"/>
         
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
    );
}

export default Home;