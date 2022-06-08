import React from "react";
import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count,setCount] = useState(1);
  
    const handleCount = (val)=>{
      if(count===1&&val===-1){
        setCount(1);
      }
      else{
        setCount(count+val);
      }
   
  }

  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={()=>{
        handleCount(+1);
      }}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button"  onClick={()=>{
        handleCount(-1);
      }}>-</button>
    </div>
  );
};

export default Counter;
