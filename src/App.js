import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Scheduler from "./components/Scheduler";

var burstss = []

function App() {
  const [form, setForm] = useState({algo: "FCFS"});
  const [bursts, setBursts] = useState([]);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };


  return (
    <>
    <h1 className="title">Scheduler</h1>
    <div className="App">
      <div className="mainform">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setBursts(burstss);
          }}
        >
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="formgroup"
          >
            <Form.Label>Number of Processes</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setField("n", e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group className="formgroup">
            <Form.Label>Scheduling Algorithm</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              onChange={(e) => setField("algo", e.target.value)}
            >
              <option>FCFS</option>
              <option>SJF</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="formgroup">
            <Form.Label>Burst Times</Form.Label>
            {Array.from({ length: form.n }, (_, k) => (
                <Form.Control style={{marginBottom: '10px'}}
                type="text"
                key={k}
                onChange={(e) => burstss.push(e.target.value)}
              />
            ))}
          </Form.Group>
          <Form.Group className="formgroup">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
      <Scheduler algo={form.algo} bursts={bursts} n={form.n}/>
    </div>
    </>
  );
}

export default App;
