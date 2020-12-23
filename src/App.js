import React, { Component, useState } from "react";
import "./App.css";
import { setUser } from "./features/counter/userSlice";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const inputs = [];
  const handleChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="app">
      <h1>Asians Preneurs</h1>
      <hr></hr>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="flex">
            <Col>
              <Label>Name</Label>
            </Col>
            <Col>
              <TextField
                onChange={(e) => (inputs[e.target.name] = e.target.value)}
                variant="outlined"
                type="text"
                name="name"
                placeholder="User Name"
              ></TextField>
            </Col>
          </Row>
          <Row className="flex">
            <Col>
              <Label>Email</Label>
            </Col>
            <Col>
              <TextField
                // onClick={(e) => handleChange(e)}
                onChange={(e) => (inputs[e.target.name] = e.target.value)}
                variant="outlined"
                type="email"
                name="email"
                placeholder="user@example.com"
              ></TextField>
            </Col>
          </Row>
          <Row className="flex">
            <Col>
              <Label>Phone</Label>
            </Col>
            <Col>
              <TextField
                // onClick={(e) => handleChange(e)}
                onChange={(e) => (inputs[e.target.name] = e.target.value)}
                variant="outlined"
                type="text"
                name="phone"
                placeholder="0XXX-XXXXXXX"
              ></TextField>
            </Col>
          </Row>
          <Row className="flex">
            <Button
              onClick={() =>
                dispatch(
                  setUser({
                    name: inputs["name"],
                    email: inputs["email"],
                    phone: inputs["phone"],
                  })
                )
              }
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
