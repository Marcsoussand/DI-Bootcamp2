
import { useState } from "react";
import Calendar from "./components/Calendar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [selectedDay, setSelectedDay] = useState("monday");

  return (
    <div className="app">
      <h1>Daily Planner</h1>
      <Calendar selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      <h2>{selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}</h2>
      <AddTask selectedDay={selectedDay} />
      <TaskList selectedDay={selectedDay} />
    </div>
  );
}

export default App;
