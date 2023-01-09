import React from "react";
import {Row, Col, Button, Form, FloatingLabel} from "react-bootstrap";
import axios from "axios";

// hooks
import {useUpdateinput} from "../utility/useUpdateinput";
import {FeedbackAlert} from "../components/FeedbackAlert";

// components
import {NavbarComp} from "../components/NavbarComp";

export function Signup() {
  const [target, changeInput] = useUpdateinput({});
  const [alertSettings, setAlertSettings] = React.useState({
    message: "",
    variant: "",
  });

  function submit() {
    axios
      .post("auth/register", {
        email: target.email,
        password: target.password,
        username: target.username,
      })
      .then((res) => {
        if (res.data !== "User Created.") {
          setAlertSettings({
            message: res.data.message,
            variant: res.data.variant,
          });
        } else {
          setAlertSettings({
            message: res.data.message,
            variant: res.data.variant,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavbarComp />
      <FeedbackAlert
        message={alertSettings.message}
        variant={alertSettings.variant}
      />

      <Row>
        <Col
          className="vh-100 d-flex justify-content-center align-items-center"
          xs={5}
        >
          <img
            src={require("../images/signup-banner.png")}
            width="500px"
            height="500px"
          />
        </Col>

        <Col className="vh-100">
          <Form className="h-75 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-decoration-underline mb-5">Signup</h1>

            <FloatingLabel
              controlId="usernamelInput"
              label="Username"
              className="mb-3 w-75"
            >
              <Form.Control
                name="username"
                placeholder="Enter a username..."
                onChange={changeInput}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="emailInput"
              label="Email"
              className="mb-3 w-75"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter a email..."
                onChange={changeInput}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="passwordInput"
              label="Password"
              className="mb-3 w-75"
            >
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password..."
                onChange={changeInput}
              />
            </FloatingLabel>

            <Button className="w-75" onClick={submit}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
