import { useContext } from "react";
import { TaskContext } from "../context/Context";

function Taskcard({ task}) {
  const {deleteTask} = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-5 rounded-md">
      <h1 className="text-xl font-bold capitalize text-center"> {task.title} </h1>
      <p className="text-gray-500 text-sm text-center"> {task.Description} </p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-5 hover:bg-red-400 w-full"
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
