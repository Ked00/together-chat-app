import React from "react";
import { Button } from "react-bootstrap";

export default function RedirectButton(props) {
    return (
        <>
            <Button className="mx-2 bg-transparent text-dark border-0 fs-5" href={props.href} onClick={props.onClick}>
                {props.text}
            </Button>
        </>
    )
}