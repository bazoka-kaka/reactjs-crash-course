import Task from "./Task";

const Tasks = ({ onToggle, tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task onToggle={onToggle} key={index} onDelete={onDelete} task={task} />
      ))}
    </>
  );
};

export default Tasks;
