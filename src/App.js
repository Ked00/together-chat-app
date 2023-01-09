import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom"

import Landing from "./views/Landing";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Main from "./views/Main";
import Room from "./views/Room";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Main />} />
            <Route path="/room/:id" element={<Room />} />
        </Routes>
    )
}