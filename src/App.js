import './App.css';

//Router
import { Switch, Route } from "react-router-dom";

//Components
import AllTasksContainer from './components/containers/AllTasksContainer'
import HomePageContainer from './components/containers/HomePageContainer'

// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those components here
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
      </Switch>  
    </div>
  );
}

export default App;
