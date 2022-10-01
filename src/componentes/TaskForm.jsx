import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
    }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Guardar tarea</button>
    </form>
  );
}

export default TaskForm;
