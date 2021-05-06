import React from 'react';
import emailjs from 'emailjs-com';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_d8zsqh7', 'template_fjpzx6a', e.target, 'user_bPjbkXVKLOQrUFNT0MIjC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact">
    <form className="form" onSubmit={sendEmail}>

    <h1 className="p-heading1">Get in Touch</h1>
   
      <input type="hidden" name="contact_number" />
    
    <div>
      <input type="text" name="user_name" placeholder="Name"  className="text-primary"/>
</div>

      <div>
      <input type="email" placeholder="Enter email"  className="text-primary" name="user_email" />
      </div>

   
      <Label className="message">Message</Label>
      <br/>
      <textarea name="message"   rows="4" cols="50" className="message" placeholder="What can we help you with today?" />
  <div>
      <input type="submit" className="submit" value="Send" />
      </div>
    </form>
    </div>
  
  );
}