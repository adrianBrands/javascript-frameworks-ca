import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  fullName: yup.string().min(3).required(),
  subject: yup.string().min(3).required(),
  email: yup.string().email("invalid email").required(),
  text: yup.string().min(3).required(),
});

export default function Contact(){

return (
  <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        fullName: '',
        subject: '',
        email: '',
        text: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
      
      <Container className="mt-5 mb-5">
        <h1 className="border-bottom">Contact</h1>
        <Form className="mt-3" noValidate onSubmit={handleSubmit}>
          <Form.Group  controlId="validationFormik01">
            <FloatingLabel controlId="floatingInputName" label="Full name"  className="mb-3">
              <Form.Control type="text" placeholder="fullName" name="fullName" value={values.fullName} onChange={handleChange} isValid={touched.fullName && !errors.fullName} isInvalid={!!errors.fullName}/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please provide more then 3 characters</Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mt-3">
            <FloatingLabel controlId="floatingInputSubject" label="Subject" className="mb-3">
              <Form.Control type="text" placeholder="subject" name="subject" value={values.subject} onChange={handleChange} isValid={touched.subject && !errors.subject} isInvalid={!!errors.subject}/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please provide more then 3 characters</Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel controlId="floatingInputEmail" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" name="email" value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} isInvalid={!!errors.email}/>
              <Form.Control.Feedback type="invalid">Please provide a valid email address</Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel controlId="floatingInputTextarea" label="Textarea" className="mb-3">
            <Form.Control type="text" placeholder="text" name="text" value={values.text} onChange={handleChange} isValid={touched.text && !errors.text} isInvalid={!!errors.text}/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please provide more then 3 characters</Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

  )}
  </Formik>
)}