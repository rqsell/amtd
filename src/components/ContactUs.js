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
    <form className="contact" onSubmit={sendEmail}>

    <h1 className="p-heading1">Get in Touch</h1>
      <input type="hidden" name="contact_number" />
  
      <FormGroup controlId="formBasicName">
      <Label className="text-muted">Name</Label>
      <br/>
      <input type="text" name="user_name" placeholder="Name"  className="text-primary"/>
</FormGroup>

      <FormGroup controlId="formBasicEmail">
      <Label className="text-muted">Email address</Label>
      <br/>
      <input type="email" placeholder="Enter email"  className="text-primary" name="user_email" />
      </FormGroup>

      <FormGroup controlId="formBasicMessage">
      <Label className="text-muted">Message</Label>
      <br/>
      <textarea name="message"   className="text-primary" placeholder="What can we help you with today?" />
      </FormGroup>
      <input type="submit" value="Send" />
    </form>
  );
}