import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        cols="30"
        rows="1"
        placeholder="Task description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <button>Save!</button>
    </form>
  );
}

export default TaskForm;
