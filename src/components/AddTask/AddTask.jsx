import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({handleChange,addTask,values}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={handleChange} value={values} />
      <button data-testid="add-task-button" disabled={!values} onClick={addTask}>+</button>
    </div>
  );
};

export default AddTask;
