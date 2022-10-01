import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

const [tasks, setTasks] = useState([]);

function createTask(task) {
  setTasks([
    ...tasks,
    {
      id: tasks.length,
      title: task.title,
      Description: task.description,
    },
  ]);
}

function deleteTask(taskId) {
  setTasks(tasks.filter((task) => task.id !== taskId));
}

useEffect(() => {
  setTasks(data);
}, []);

export function ContextProvider(props) {
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
