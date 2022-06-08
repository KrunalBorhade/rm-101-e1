import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({tasks}) => {
  // sample values to be replaced
  let totalTask =0 ;
  let unCompletedTask =0 ;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      {/* You have {tasks.length} out of {totalTask} */}
      <b data-testid="header-remaining-task">You have {tasks.length}</b>
      <b data-testid="header-total-task">out of {tasks.length} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
