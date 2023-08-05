import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect,useCallback } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Report({value}) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [db_patientsById, db_getPatientById] = useState([]);
  const [db_report, db_getReport] = useState([]);

  const loadPatients = useCallback(async () => {
    const result = await axios.get(`http://localhost:8080/getRegisteredPatient?id=${value}`)
    db_getPatientById(result.data);
    console.log(result.data);
    const report = await axios.get(`http://localhost:8080/getReport/${value}`)
    db_getReport(report.data);
    console.log(report.data);
}, [value])

useEffect(() => {
    loadPatients();
}, [loadPatients])

  return (
    <>
        <Button className="btn-danger btn-sm" onClick={() => handleShow(true)}>
          View
        </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{db_patientsById.name}'s Report </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>No. of visits</th>
          <th>Date of visit</th>
          <th>BP</th>
          <th>Weight</th>
          <th>Complaint</th>
          <th>History</th>
          <th>Identification</th>
          <th>Prognosis</th>
          <th>Follow Up</th>
        </tr>
      </thead>
      <tbody>
            {
                db_report.map((row,index)=>(
                    <tr key={row.id}>
                    <td>{index+1}</td>
                    <td>{row.dov}</td>
                    <td>{row.bp}</td>
                    <td>{row.weight}</td>
                    <td>{row.complaint}</td>
                    <td>{row.history}</td>
                    <td>{row.identification}</td>
                    <td>{row.prognosis}</td>
                    <td>{row.followup}</td>
                    </tr>
                ))
            }
      </tbody>
    </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Report;