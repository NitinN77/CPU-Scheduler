import React from "react";
import "./Scheduler.css";
import fcfs from '../algorithms/fcfs';
import sjf from '../algorithms/sjf';

function Scheduler({ algo, bursts, n }) {
  return (
    <div className="main">
      {n ? <div>{bursts.length ? sjf(bursts) : <></>}</div> : <div></div>}
    </div>
  );
}

export default Scheduler;
