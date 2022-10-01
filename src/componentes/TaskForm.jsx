function TaskForm() {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Escribe una tarea"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button>Guardar tarea</button>
    </form>
  );
}

export default TaskForm;
