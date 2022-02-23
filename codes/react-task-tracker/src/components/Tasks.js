import Task from "./Task";

const Tasks = ({ onToggle, tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          onToggle={onToggle}
          key={task.id}
          onDelete={onDelete}
          task={task}
        />
      ))}
    </>
  );
};

export default Tasks;
