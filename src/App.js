import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "First Task",
      day: "Sep 12, 2022",
      reminder: true,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    const id = tasks.length + 1;
    task["id"] = id;
    setTasks([task, ...tasks]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // show add task
  const showAddTaskForm = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={showAddTaskForm}
        showAddTask={showAddTask}
      />
      <AddTask onAdd={addTask} show={showAddTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <Header />
//   }
// }

export default App;
