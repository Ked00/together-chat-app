import React from "react";
import {Routes, Route} from "react-router-dom";

import {Landing} from "./views/Landing";
import {Login} from "./views/Login";
import {Signup} from "./views/Signup";
import {HomePage} from "./views/HomePage";
import {Room} from "./views/Room";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<HomePage />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
  );
}
