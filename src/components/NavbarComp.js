import React from "react";
import {Container, Navbar} from "react-bootstrap";
import {RedirectButton} from "./RedirectButton";
import {TextLogo} from "./TextLogo";

export function NavbarComp() {
  return (
    <Navbar className="border-bottom border-2">
      <Container>
        <TextLogo href="/" />

        <div>
          <RedirectButton text="Login" href="login" />

          <RedirectButton text="Signup" href="signup" />
        </div>
      </Container>
    </Navbar>
  );
}
