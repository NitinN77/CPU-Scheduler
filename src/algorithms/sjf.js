import { Table } from "react-bootstrap";

const sjf = (bursts) => {
    const n = bursts.length
    var avg_wt = 0
    var avg_tat = 0
    var total = 0
    var p = Array(100)
    var wt = Array(100)
    var tat = Array(100)
    for(var i=0;i<n;i++){
        p[i]=i+1
    }
    for(var i=0;i<n;i++){
        var pos = i
        for(var j=i+1;j<n;j++){
            if(bursts[j]<bursts[pos]){
                pos = j
            }
        }
        var temp = bursts[i]
        bursts[i] = bursts[pos]
        bursts[pos] = temp
        temp=p[i]
        p[i]=p[pos]
        p[pos]=temp
    }
    wt[0]=0
    for(var i=1;i<n;i++){
        wt[i]=0
        for(var j=0;j<i;j++){
            wt[i]+=+bursts[j]
        }
        total+=+wt[i]
    }
    avg_wt = total/n;
    total = 0
    for(var i=0;i<n;i++){
        tat[i]=+bursts[i] + +wt[i]
        total+=+tat[i]
    }
    avg_tat = total/n
    console.log(wt,tat)
    return(
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
                <td>{p[i]}</td>
                <td>{tat[i]}</td>
                <td>{bursts[i]}</td>
                <td>{wt[i]}</td>
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
    )

}

export default sjf;