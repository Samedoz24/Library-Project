import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaBookMedical } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { IoIosTime } from "react-icons/io";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <NavLink className={"nav-link"} to="/">
          <IoHome /> Home
        </NavLink>
        <NavLink className={"nav-link"} to="/books">
          <FaBookMedical /> Books
        </NavLink>
        <NavLink className={"nav-link"} to="/note">
          <LuNotebookPen /> Notes
        </NavLink>
        <NavLink className={"nav-link"} to="/ToDoList">
          <LuListTodo /> To-Do
        </NavLink>
        <NavLink className={"nav-link"} to="/Pomodoro">
          <IoIosTime /> Pomodoro
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
