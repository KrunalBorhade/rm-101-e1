import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({task, removeTask}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      {task.text}
      <div data-testid="task-text"></div>
      {/* Counter here */}
      <Counter />
      <button data-testid="task-remove-button" onClick={()=>{removeTask (task.text)}}>X</button>
    </li>
  );
};

export default Task;
