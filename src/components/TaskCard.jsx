function Taskcard({ task, deleteTask }) {

  return (
    <div>
      <h1> {task.title} </h1>
      <p> {task.Description} </p>
      <button onClick={() => {deleteTask(task.id)}}>Delete task</button>
    </div>
  );
}

export default Taskcard;
