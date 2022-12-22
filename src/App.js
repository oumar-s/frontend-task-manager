import './App.css';

//Router
import { Switch, Route } from "react-router-dom";

//Components
/*
import HomePageContainer from './components/containers/HomePageContainer'
import AllTasksContainer from './components/containers/AllTasksContainer'
import TaskContainer from './components/containers/TaskContainer';
import EditTaskContainer from './components/containers/EditTaskContainer';
*/
import {
  HomePageContainer,
  EmployeeContainer,
  TaskContainer,
  AllEmployeesContainer,
  AllTasksContainer,
  NewTaskContainer,
  EditTaskContainer
} from './components/containers';
// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those components here
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/employee/:id" component={EmployeeContainer} />
        <Route exact path="/employees" component={AllEmployeesContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
        <Route exact path="/task/:id" component={TaskContainer} />
        <Route exact path="/edittask/:id" component={EditTaskContainer} />
        <Route exact path="/newtask" component={NewTaskContainer} />
      </Switch>  
    </div>
  );
}

export default App;
