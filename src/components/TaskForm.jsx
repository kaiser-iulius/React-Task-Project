import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("")
    setDescription("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        cols="30"
        rows="1"
        placeholder="Task description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description} //Para que una vez enviado quede vacio el input
      ></textarea>
      <button>Save!</button>
    </form>
  );
}

export default TaskForm;
