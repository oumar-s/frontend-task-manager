import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
        {console.log("here: " + task)}
      <h1>{task.description}</h1>
      {task.employee ? <h3>{task.employee.firstName + " " + task.employee.lastName}</h3>: <h3>Employees: </h3>}
      {<Link to={`/edittask/${task.id}`}>Edit task information</Link>}
      <br/>
      <Link to={`/tasks`}>View all task</Link>
    </div>
  );

};

export default TaskView