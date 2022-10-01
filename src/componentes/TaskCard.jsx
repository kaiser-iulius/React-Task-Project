function Taskcard({ task }) {
  return (
    <div>
      <h1> {task.title} </h1>
      <p> {task.Description} </p>
    </div>
  );
}

export default Taskcard;
