//import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks} = props;
  //tasks = [{id: 300, title: "hello"}]
  /*if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Course</button>
      </Link>
    </div>
    );
  }*/
  
  return (
    <div>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
            <h1>{description}</h1>
          {/* <button onClick={() => deleteCourse(course.id)}>Delete</button> */}
          </div>
        );
      }
      )}
      {/* <Link to={`/newcourse`}>
        <button>Add New Course</button>
        </Link> */ }
    </div>
  );
};


export default AllTasksView;