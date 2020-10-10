import React from "react";
import { Formik } from "formik";
import { Container, Button, Row, Col, Form } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="p-3">
      <Row>
        <Col>
          <h1 className="header">New Razzle app</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              const errors: any = {};

              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  handleSubmit(e)
                }
              >
                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  {errors.email && touched.email && errors.email}
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />

                  {errors.password && touched.password && errors.password}
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}
