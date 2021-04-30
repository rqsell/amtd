import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "../styles/Carousels.css"

function Carousels(props) {
    return (
        <div className= "caropage">
           <Carousel classname="caro">
  <Carousel.Item interval={1000}  className="caroitem">

  <div className="carotxt">
<section id="header">
  <h1>Aircraft Maintenance Tracking Digital</h1>
</section>
 <section id="about">
    
      <p>Aircraft Maintenance Tracking Digital is a simplified and easy tool that lets you instantly check the status of upkeep for all of your aircrafts. Manage tasks, check dates and verify all the information you need to know to ensure safety.  </p>
      </section>
      </div>
  </Carousel.Item>
  <Carousel.Item interval={500}  className="caroitem">
    <img
      className="d-block w-100"
      id="caroimg"
      src="./jetimg5.jpg"
      alt="Second slide"
    
    />
  
  </Carousel.Item>
  <Carousel.Item className="caroitem">
  <div className="carotxt">
<section id="header">
  <h1>Access Your Information</h1>
</section>
 <section id="about">
    
      <p>With our easy to use dashboard, with a click of a button you can easily access: <br/>
      <br/>
Aircraft Info, Flight Log, ADs, SBs, Airframe Status, Engine Status, APU Status, Digital Records, Airframe Log Books, Engine Log Books and APU Log Books.
 </p>
      </section>
      </div>
  </Carousel.Item>
</Carousel> 
<div className="about">
<h1>About Us</h1>
<p>Aircraft Maintenance Tracking Digital is a simplified and easy tool that lets you instantly check the status of upkeep for all of your aircrafts. Manage tasks, check dates and verify all the information you need to know to ensure safety.  </p>
</div>
<div className="details">
<section>
<h3>Simplified Dashboard</h3>
      <p>We prioritize tracking your maintenance needs using our simplified and easy to use dashboard.</p>
</section>
<section>
<h3>Built For You</h3>
      <p>Aircraft Maintenance Tracking Digital was built to streamline the tracking process with an easy to use interface. </p>
</section>
        </div>
        </div>
    );
}

export default Carousels;