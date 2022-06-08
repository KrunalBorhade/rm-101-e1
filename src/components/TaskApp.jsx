import React from "react";

import styles from "./taskApp.module.css";
import { v4 as uuidv4 } from 'uuid';
import { TaskHeader } from "./TaskHeader";
import {AddTask} from "./AddTask"
import {Tasks} from "./Tasks"
import TodoData from "../data/tasks.json"
import { useState } from "react";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [data,setData] = useState("")
  const [tasks,setTasks] = useState(TodoData)

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const addTask = () => {
    setTasks([...tasks,{
      "id":uuidv4(),
      "text":data,
      "done":false,
      "count":1
    }])
    setData("")
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((tasks)=>tasks.text!==id))
  }

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      Todo List
      {/* Header */}
      <TaskHeader tasks={tasks} />
      {/* Add Task */}
      <AddTask handleChange={handleChange} addTask={addTask} values={data}/>
      {/* Tasks */}
      <Tasks tasks={tasks}  removeTask={removeTask}/>
    </div>
  );
};

export default TaskApp;
