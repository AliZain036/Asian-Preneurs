import React, { useState } from "react";
import * as Yup from "yup";
import "./Login.css";
import { Formik, ErrorMessage } from "formik";
import { Button, Col, Container, Label, Row, Form } from "reactstrap";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setUser } from "../features/counter/userSlice";

const Login = () => {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const dispatchAction = (values) => {
    dispatch(
      setUser({
        payload: values,
      })
    );
  };
  //   const handleChange = (e) => {
  //     setInput({
  //       ...inputs,
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  //   const isValid = () => {
  //     let emailError = "";
  //     let passwordError = "";
  //     if (!inputs.email.includes("@")) {
  //       emailError = "Invalid Email";
  //     }
  //     if (emailError) {
  //       setInput({ emailError });
  //       return false;
  //     }
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     isValid();
  //     console.log(inputs);
  //   };
  return (
    <div className="login">
      <div className="login-form">
        <h1>Login Form</h1>
        <hr />
        <Container>
          <Formik
            initialValues={{ email: "", password: "" }} 
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Must be 8 characters more or long")
                .required("Required"),
            })}
                      onSubmit={(values) => {
                console.log(values);
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Row className="flex">
                  <Col>
                    <Label>Email</Label>
                  </Col>
                  <Col>
                    <TextField
                      onChange={handleChange}
                      variant="outlined"
                      type="email"
                      name="email"
                      placeholder="user@example.com"
                    ></TextField>
                    <div>
                      <ErrorMessage name="email" />
                    </div>
                  </Col>
                </Row>
                <Row className="flex">
                  <Col>
                    <Label>Password</Label>
                  </Col>
                  <Col>
                    <TextField
                      onChange={handleChange}
                      variant="outlined"
                      type="password"
                      name="password"
                    ></TextField>
                    <div>
                      <ErrorMessage name="password" />
                    </div>
                  </Col>
                </Row>
                <Row className="flex">
                  <Button
                    onClick={dispatchAction(values)}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Register
                  </Button>
                </Row>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </div>
  );
};

export default Login;
