import React, { useState } from "react";
import { Container, Form, Button, FloatingLabel, Col } from "react-bootstrap";
import { useForm } from 'react-hook-form';

export default function Contact(){
  const { register, handleSubmit } = useForm();
  //const [validated, setValidated] = useState(false);

   /*const handleSubmit = (e) => {
    const form = e.currentTarget;
  
    if(form.checkValidity() === false){
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true)      
    e.preventDefault();
    
  }*/

function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form noValidate  onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="validationCustom01">
          <FloatingLabel controlId="floatingInputName" label="Full name"  className="mb-3">
          <input {...register('firstName')} />
     
            <Form.Control required minLength="3" type="text" placeholder="full name"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide more then 3 characters</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mt-3">
          <FloatingLabel controlId="floatingInputSubject" label="Subject" className="mb-3">
            <Form.Control required minLength="3" type="text" placeholder="subject"></Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide more then 3 characters</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel controlId="floatingInputEmail" label="Email" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com"/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel controlId="floatingInputTextarea" label="Textarea" className="mb-3">
            <Form.Control required minLength="3" as="textarea" placeholder="textarea"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide more then 3 characters</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        
        
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </Container>
  )
}




/*
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      <input {...register('lastName')} />
      <select {...register('role')}>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="admin">Admin</option>
        <option value="other">Other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

*/




