import React from "react";
import {MainNavbar} from "../components/MainNavbar";
import {Row, Col} from "react-bootstrap";
import axios from "axios";
import io from "socket.io-client";
import {CommunityGroupChat} from "../components/CommunityGroupChat";

// hooks
import {useCheckAuth} from "../utility/useCheckAuth";

export function HomePage() {
  useCheckAuth();
  const socket = io();
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    axios
      .get("account/info")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));

    socket.on("connect", () => {
      socket.emit("join", user.username);
    });
  }, []);

  return (
    <div>
      <MainNavbar user={user} setUser={setUser} />

      <Row>
        <Col className="vh-100">
          <CommunityGroupChat />
        </Col>
      </Row>
    </div>
  );
}
