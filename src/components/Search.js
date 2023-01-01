import React from "react";
import axios from "axios";
import { Form, Button, Accordion, Container } from "react-bootstrap"

import useUpdateinput from "../utility/useUpdateinput";

export default function Search() {
    const [list, setList] = React.useState("");
    const [target, changeInput] = useUpdateinput({});


    function findFriend(e) {
        axios.post("search/findFriend", {
            username: target.friendsList
        })
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    }

    function add() {
        axios.post("search/add")
            .then(res => {
                window.location.reload()
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="d-flex position-relative w-100">
                <Form.Control
                    type="search"
                    placeholder="Search for a friend..."
                    name="friendsList"
                    onChange={changeInput}
                />

                <Button onClick={findFriend}>Submit</Button>
            </div>

            {list &&
                <div className="position-absolute w-25">
                    <Container>
                        <p className="w-50 d-flex justify-content-between">
                            {list}
                            <span className="ms-5" onClick={add}>
                                <img src={require("../images/add.png")} width="17px" height="17px" />
                            </span>
                        </p>
                    </Container>
                </div>
            }

        </div>

    )
}