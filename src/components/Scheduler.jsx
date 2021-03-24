import React from "react";
import "./Scheduler.css";
import { Table } from "react-bootstrap";

const fcfs = (bursts) => {
  var process = Array(100);
  var tat = Array(100);
  var avg_wt = 0;
  var avg_tat = 0;
  const n = bursts.length;
  process[0] = 0;
  for (var i = 1; i < n; i++) {
    process[i] = 0;
    for (var j = 0; j < i; j++) {
      process[i] += +bursts[j];
    }
  }
  for (var i = 0; i < n; i++) {
    tat[i] = +bursts[i] + +process[i];
    avg_wt += +process[i];
    avg_tat += +tat[i];
  }
  avg_wt /= n;
  avg_tat /= n;
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Process</th>
            <th>Completion Time</th>
            <th>Burst Time</th>
            <th>Waiting Time</th>
            <th>Turnaround Time</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: n }, (_, i) => (
            <tr id={i}>
              <td>{i}</td>
              <td>{tat[i]}</td>
              <td>{bursts[i]}</td>
              <td>{process[i]}</td>
              <td>{tat[i]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="avg">
      <h4>Average Waiting Time: {avg_wt}</h4>
      <h4>Average Turnaround Time: {avg_tat}</h4>
      </div>
    </>
  );
};

function Scheduler({ algo, bursts, n }) {
  return (
    <div className="main">
      {n ? <div>{bursts.length ? fcfs(bursts) : <></>}</div> : <div></div>}
    </div>
  );
}

export default Scheduler;
