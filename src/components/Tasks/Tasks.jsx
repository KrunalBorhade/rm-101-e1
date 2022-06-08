import React from "react";
import styles from "./tasks.module.css";
import {Task} from "../Task"
import { v4 as uuidv4 } from 'uuid';


const Tasks = ({tasks,removeTask}) => {
  // NOTE: do not delete `data-testid` key value pair
  
  
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {
          tasks.map(task=>(
            <Task task={task} key={uuidv4()} removeTask={removeTask} />
          ))
        }
        {/* Task List */}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
       
      </div>
    </>
  );
};

export default Tasks;
