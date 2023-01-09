import React from "react";
import {Container, Navbar, Spinner} from "react-bootstrap";
import {OneInputModal} from "./OneInputModal";
import {TextLogo} from "./TextLogo";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import Peer from "peerjs";

import {Profile} from "./Profile";

// hooks
import {useUpdateinput} from "../utility/useUpdateinput";
import {useGetCamera} from "../utility/useGetCamera";

export function MainNavbar(props) {
  const navigate = useNavigate();
  const peer = new Peer();
  const [target, changeInput] = useUpdateinput({roomid: uuidv4()});
  const [iWantToCall, setIWantToCall] = React.useState("");

  function createRoom() {
    // room id gets set once you are on the rooms page
    // so others can call you
    navigate(`/room/${target.roomid}`);
  }

  function targetFunc(e) {
    setIWantToCall(e.target.value);
  }

  async function startCall() {
    const getMedia = useGetCamera;

    await navigate(`/room/${iWantToCall}`);
    const userMedia = await getMedia();
    const call = peer.call(iWantToCall, userMedia);

    call.on("stream", async (stream) => {
      const participant = await document.getElementById("participant");
      participant.srcObject = stream;
    });
  }

  return (
    <Navbar className="border-bottom border-2">
      <Container>
        <TextLogo href="/main" />

        <div>
          <OneInputModal
            button="Create"
            header="Create"
            label="Your room id:"
            submit="Create room"
            roomId={target.roomid}
            targetFunc={changeInput}
            onClick={createRoom}
          />

          <OneInputModal
            button="Join"
            header="Join Room"
            label="Friend id:"
            submit="Join room"
            onClick={startCall}
            targetFunc={targetFunc}
          />

          {props.user.username ? 
            <Profile user={props.user.username} />
           : 
            <Spinner variant="primary" size="sm" />
          }
        </div>
      </Container>
    </Navbar>
  );
}
