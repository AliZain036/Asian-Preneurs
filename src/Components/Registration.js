import { makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Form, Label, Row } from "reactstrap";
import { setUserData } from "../features/counter/userDataSlice";
import "./Registration.css";

const Registration = () => {
  const [inputs, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <div className="signup-form">
        <h1>Asians Preneurs</h1>
        <hr />
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row className="flex">
              <Col>
                <Label>Name</Label>
              </Col>
              <Col>
                <TextField
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                    setUserData({
                      payload: inputs,
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
    </div>
  );
};

export default Registration;
