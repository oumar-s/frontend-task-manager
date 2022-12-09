import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All employees
export const fetchAllEmployees = (employees) => {
    return {
      type: at.FETCH_ALL_EMPLOYEES,
      payload: employees,
    };
  };

//All courses
export const fetchAllTasks = (tasks) => {
    return {
      type: at.FETCH_ALL_TASKS,
      payload: tasks,
    };
  };