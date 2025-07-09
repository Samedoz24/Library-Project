import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Note from "../pages/Note";
import TodoList from "../pages/TodoList";
import Pomodoro from "../pages/Pomodoro";

function SiteContext() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/note" element={<Note />} />
        <Route path="/ToDoList" element={<TodoList />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
      </Routes>
    </>
  );
}

export default SiteContext;
