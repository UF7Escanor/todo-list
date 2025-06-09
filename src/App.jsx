import { useState } from "react";

function App() {
  const [task, setTask] = useState([
    "Eat Breakfast",
    "Take Shower",
    "play football",
  ]);

  const [newTask, setNewTask] = useState("");

  function handelInputchange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((prev) => [...prev, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTask = task.filter((element, i) => i !== index);
    setTask(updatedTask);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];

      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];

      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];

      setTask(updatedTask);
    }
  }

  // function addTask() {
  //   setTask((prev) => [...prev, newTask]);
  // }
  // function delTask(index) {
  //   setTask((aaa) => aaa.filter((_, i) => i != index));
  // }
  // function moveTaskUp(index) {
  //   setTask((prev) => {
  //     const updated = [...prev];

  //     updated[index] = newTask;

  //     return updated;
  //   });
  // }
  // function moveTaskDown(index) {}

  return (
    <div>
      <h1>TO-DO List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => handelInputchange(e)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
            <button onClick={() => moveTaskUp(index)}>☝️</button>
            <button onClick={() => moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
