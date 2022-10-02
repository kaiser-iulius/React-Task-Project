import { useState, useContext } from "react";
import { TaskContext } from "../context/Context";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-5">
        <h1 className="text-white text-3xl font-extrabold mb-8 text-center">Add-a-Task</h1>
        <input
          type="text"
          placeholder="Task title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-600 p-3 w-full mb-3"
          autoFocus
        />
        <textarea
          cols="30"
          rows="1"
          placeholder="Task description"
          className="bg-slate-600 p-3 w-full mb-3"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description} //Para que una vez enviado quede vacio el input
        ></textarea>
        <button className="bg-indigo-500 px-3 py-2 hover:bg-indigo-400 w-full text-white">Save!</button>
      </form>
    </div>
  );
}

export default TaskForm;
