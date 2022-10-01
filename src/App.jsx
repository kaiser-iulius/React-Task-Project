import TaskList from "./componentes/TaskList";
import TaskForm from "./componentes/TaskForm";
import { tasks as data } from "./componentes/tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
