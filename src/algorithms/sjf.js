import { Table } from "react-bootstrap";

const sjf = (bursts) => {
    var burst = []
    const n = bursts.length
    var avg_wt = 0
    var avg_tat = 0
    var total = 0
    for(var i=0;i<n;i++){
      burst.push({
        "id": i+1,
        "b": bursts[i],
        "wt": 0,
        "tat": 0,
      })
    }
    for(var i=0;i<n;i++){
        var pos = i
        for(var j=i+1;j<n;j++){
            if(burst[j].b<burst[pos].b){
                pos = j
            }
        }

        [burst[i], burst[pos]] = [burst[pos], burst[i]]
    }
    burst[0].wt=0
    for(var i=1;i<n;i++){
        burst[i].wt=0
        for(var j=0;j<i;j++){
            burst[i].wt+=+burst[j].b
        }
        total+=+burst[i].wt
    }
    avg_wt = total/n;
    total = 0
    for(var i=0;i<n;i++){
        burst[i].tat=+burst[i].b + +burst[i].wt
        total+=+burst[i].tat
    }
    avg_tat = total/n
    
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
              <tr key={i}>
                <td>{burst[i].id}</td>
                <td>{burst[i].tat}</td>
                <td>{burst[i].b}</td>
                <td>{burst[i].wt}</td>
                <td>{burst[i].tat}</td>
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