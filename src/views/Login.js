import React from "react";
import { Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// hooks
import { useUpdateinput } from "../utility/useUpdateinput";

// components
import { NavbarComp } from "../components/NavbarComp";
import { FeedbackAlert } from "../components/FeedbackAlert"

export function Login() {
    const navigate = useNavigate();
    const [target, changeInput] = useUpdateinput({});
    const [alertSettings, setAlertSettings] = React.useState({
        message: "",
        variant: ""
    })

    function submit() {
        axios.post("auth/login", {
            username: target.username,
            password: target.password
        })
            .then(res => {
                if (res.data === "ok") {
                    navigate("/main")
                }
                else {
                    setAlertSettings({ message: res.data.message, variant: res.data.variant })
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <NavbarComp />
            <FeedbackAlert
                message={alertSettings.message}
                variant={alertSettings.variant}
            />
            <Row>
                <Col className="vh-100 d-flex justify-content-center align-items-center" xs={5}>
                    <img src={require("../images/login-banner.png")} width="500px" height="500px" />
                </Col>

                <Col className="vh-100">
                    <Form className="h-75 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-decoration-underline mb-5">Login</h1>

                        <FloatingLabel
                            controlId="usernameInput"
                            label="Username"
                            className="mb-3 w-75"
                        >
                            <Form.Control type="username" name="username" placeholder="Enter a username..." onChange={changeInput} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="passwordInput"
                            label="Password"
                            className="mb-3 w-75"
                        >
                            <Form.Control type="password" name="password" placeholder="Enter your password..." onChange={changeInput} />
                        </FloatingLabel>

                        <Button className="w-75" onClick={submit}>Login</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}