import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun...</h1>;
  }

  return (
    <div>
      {tasks.map((tasks) => (
        <div key={tasks.id}>
          <h1> {tasks.title} </h1>
          <p> {tasks.Description} </p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
