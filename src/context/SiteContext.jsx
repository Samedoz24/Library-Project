import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Note from "../pages/Note";
import ToDoList from "../pages/ToDoList";
import Pomodoro from "../pages/Pomodoro";

function SiteContext() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/note" element={<Note />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
      </Routes>
    </>
  );
}

export default SiteContext;
