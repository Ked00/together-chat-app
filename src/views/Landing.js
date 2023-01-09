import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import {ChangingText} from "../components/ChangingText";

export function Landing() {
  return (
    <div className="vh-100">
      <Row className="h-75">
        <Col>
          <div className="mt-4 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1>Talk to </h1>
            <ChangingText />
          </div>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <div className="mb-3">
            <Button
              variant="lg"
              className="bg-primary text-white w-50"
              href="/login"
            >
              Login
            </Button>
          </div>

          <div>
            <Button
              variant="lg"
              className="bg-primary text-white w-50"
              href="/signup"
            >
              Signup
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
