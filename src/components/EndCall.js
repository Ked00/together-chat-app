import React from "react";

export function EndCall(props) {
  return (
    <img
      src={require("../images/end-call.png")}
      className="bg-danger rounded-circle p-4"
      onClick={props.endCall}
    />
  );
}
