import React from "react";
import { Button, Col } from "react-bootstrap";
import { io } from "socket.io-client";

export function MessagePage(props) {
    const socket = io();
    const [sendMessage, setSendMessage] = React.useState("")
    const [messageInfo, setMessageInfo] = React.useState([])

    React.useEffect(() => {
        socket.on("received", (message) => {
            setMessageInfo(prev => {
                return [...prev, { message: message, sender: false }]
            })
        })
    }, [])

    const showMessage = messageInfo.map((item, i) => {
        return item.sender ? <p className="text-end" key={i}>{item.message}</p> : <p key={i}>{item.message}</p>
    })

    function iWantToSend(e) {
        setSendMessage(e.target.value)
    }

    function send() {
        setMessageInfo(prev => {
            return [...prev, { message: sendMessage, sender: true }]
        })
        socket.emit("sent", sendMessage)
        setSendMessage("")
    }

    return (
        <Col className="vh-100">
            <h1 className="text-center">Community Group Chat</h1>

            <div className="vh-100 position-relative">

                <div className="overflow-scroll border h-75 p-3">
                    {showMessage}
                </div>

                <div className="position-absolute bottom-0 mb-5 w-100 text-center">
                    <input className="mb-3 w-50 me-3 p-1" onChange={iWantToSend} value={sendMessage} autoFocus={true} />
                    <Button onClick={send}>Send</Button>
                </div>
            </div>
        </Col>
    )
}

