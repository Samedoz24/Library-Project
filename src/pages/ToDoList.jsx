import React, { useState } from "react";
import "./todo.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  function handleClick(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;
    const newTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(newTasks);
    setNewTask("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index - 1],
    ];
    setTasks(newTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index + 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index + 1],
    ];
    setTasks(newTasks);
  }

  function toggleComplete(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  return (
    <div className="to-do-list">
      <h1>✅ TO-DO-LİST</h1>
      <h3 style={{ textAlign: "center", marginLeft: "180px" }}>
        To-Do'larınızı Burada Saklayın.
      </h3>
      <br />
      <br />
      <div>
        <input
          style={{ marginLeft: "180px" }}
          type="text"
          placeholder="To-Do ekleyin..."
          value={newTask}
          onChange={handleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <button className="add-button" onClick={addTask}>
          Ekle
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              className="check"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span className={`text ${task.completed ? "completed" : ""}`}>
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              <FaArrowUp />
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              <FaArrowDown />
              <div>
                <li></li>
              </div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
