import React from "react";

export function TextLogo(props) {
  return (
    <>
      <a href={props.href} className="text-decoration-none">
        <h1 className="text-primary">Together</h1>
      </a>
    </>
  );
}
