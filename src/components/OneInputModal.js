import React from "react";
import {Modal, Form, Button} from "react-bootstrap";
import {RedirectButton} from "./RedirectButton";

// hooks
import {useToggleState} from "../utility/useToggleState";

export function OneInputModal(props) {
  const [toggle, switchState] = useToggleState(false);

  return (
    <>
      <RedirectButton text={props.button} onClick={switchState} />

      <Modal show={toggle} onHide={switchState}>
        <Modal.Header closeButton>{props.header}</Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
              value={props.roomId}
              onChange={props.targetFunc}
              name="oneinput"
              min={5}
            />
          </Form.Group>

          <Button
            className="mt-4 w-100"
            href={props.href}
            onClick={props.onClick}
          >
            {props.submit}
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
