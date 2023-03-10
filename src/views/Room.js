import React from "react";
import {Row, Col} from "react-bootstrap";
import Peer from "peerjs";
import {useGetCamera} from "../utility/useGetCamera";
import {useNavigate, useParams} from "react-router-dom";
import {EndCall} from "../components/EndCall";

export function Room() {
  const id = useParams(); // pulling room id from url
  const peer = new Peer(id.id); 
  const getMedia = useGetCamera;
  const navigate = useNavigate();

  React.useEffect(() => {
    getMedia(); //turns on your camera when you access the room page

    peer.on("call", async (call) => {
      const userMedia = await getMedia();
      call.answer(userMedia);

      call.on("stream", async (stream) => {
        const participant = await document.getElementById("participant");
        participant.srcObject = stream;
      });
    });
  }, []);

  async function endCall() {
    peer.destroy();
    await navigate("/main");
    window.location.reload();
  }

  return (
    <>
      <Row className="overflow-hidden bg-dark">
        <Col>
          <div className="w-100 vh-100 position-relative">
            <video
              id="participant"
              autoPlay
              playsInline
              className="w-100 h-100"
            ></video>
            <video
              id="host"
              autoPlay
              playsInline
              className="border border-4 rounded position-absolute top-0 end-0 me-5 mt-5 h-25 w-25"
            ></video>

            <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center align-items-center w-50 p-5">
              <EndCall endCall={endCall} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
