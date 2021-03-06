import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //fetch tasks

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = res.json();

    return data;
  };

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks to Show!"
      )}
    </div>
  );
}

export default App;
