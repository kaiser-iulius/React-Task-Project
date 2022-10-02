import { useContext } from "react";
import { TaskContext } from "../context/Context";

function Taskcard({ task}) {
  const {deleteTask} = useContext(TaskContext);
  return (
    <div className="bg-slate-500">
      <h1> {task.title} </h1>
      <p> {task.Description} </p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete task
      </button>
    </div>
  );
}

export default Taskcard;
