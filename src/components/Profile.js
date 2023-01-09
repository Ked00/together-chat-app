import React from "react";
import {Offcanvas, Button, Form, Alert} from "react-bootstrap";
import {useToggleState} from "../utility/useToggleState";
import {useUpdateinput} from "../utility/useUpdateinput";
import axios from "axios";

export function Profile(props) {
  const [toggle, switchState] = useToggleState(false);
  const [target, changeInput] = useUpdateinput({});
  const [alertMessage, setAlertMessage] = React.useState({show: false});

  function submit() {
    axios
      .patch("account/update", {
        username: props.user,
        newname: target.username,
        newPassword: target.password,
      })
      .then((res) => {
        if (res.data !== "user updated successfully") {
          setAlertMessage({
            message: res.data.message,
            variant: res.data.variant,
            show: true,
          });
        } else {
          setAlertMessage({
            message: res.data.message,
            variant: res.data.variant,
            show: true,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  // resets the alert when the canvas is closed
  function closeAll() {
    setAlertMessage({show: false});
    switchState();
  }
  return (
    <>
      <Button className="border-0 bg-transparent" onClick={switchState}>
        <img
          src={require("../images/friends.png")}
          width="30px"
          height="30px"
        />
      </Button>

      <Offcanvas show={toggle} onHide={closeAll} placement="end">
        <Alert
          className="text-center"
          variant={`${alertMessage.variant}`}
          show={alertMessage.state}
        >
          {alertMessage.message}
        </Alert>

        <Offcanvas.Header className="fs-2">{props.user}</Offcanvas.Header>

        <Offcanvas.Body>
          <div className="d-flex justify-content-center mb-5">
            <img
              src={require("../images/friends.png")}
              width="150px"
              height="150px"
              className="border border-dark rounded-circle p-1 border-5"
            />
          </div>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Update Username</Form.Label>
              <Form.Control
                placeholder="Enter a new username"
                onChange={changeInput}
                name="username"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Update Password</Form.Label>
              <Form.Control
                placeholder="Enter a new password"
                onChange={changeInput}
                name="password"
              />
            </Form.Group>
          </Form>
          <Button onClick={submit}>Submit Changes</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
