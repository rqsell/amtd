import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./styles/Carousels.css"

function Carousels(props) {
    return (
        <div className= "caropage">
           <Carousel classname="caro">
  <Carousel.Item interval={1000}  className="caroitem">
    <img
      className="d-block w-100"
      src="./jetimg2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>About Us</h3>
      <p>Aircraft Maintenance Tracking Digital is a simplified and easy tool that lets you instantly check the status of upkeep for all of your aircrafts. Manage tasks, check dates and verify all the information you need to know to ensure safety.  </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}  className="caroitem">
    <img
      className="d-block w-100"
      id="caroimg"
      src="./jetimg3.jpg"
      alt="Second slide"
    
    />
    <Carousel.Caption>
      <h3>Simplified Dashboard</h3>
      <p>We prioritize tracking your maintenance needs using our simplified and easy to use dashboard.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="caroitem">
    <img
      className="d-block w-100"
      src="./jetimg4.jpg"
      alt="Third slide"
      
    />
    <Carousel.Caption>
      <h3>Built For You</h3>
      <p>Aircraft Maintenance Tracking Digital was built to streamline the tracking process with an easy to use interface. </p>
    </Carousel.Caption>
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