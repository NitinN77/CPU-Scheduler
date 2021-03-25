import React, { useState } from "react";
import "./Scheduler.css";
import fcfs from '../algorithms/fcfs';
import sjf from '../algorithms/sjf';


function Scheduler({ algo, bursts, n }) {

  const execalgo = (algo) => {
    switch(algo){
      case "FCFS":
        return(fcfs(bursts))
      case "SJF":
        return(sjf(bursts))
      default:
        break
    }
  }

  return (
    <div className="main">
      {n ? <div>{bursts.length ? execalgo(algo) : <></>}</div> : <div></div>}
    </div>
  );
}

export default Scheduler;
