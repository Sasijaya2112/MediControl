import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from 'axios';

const ViewDescriptionModal = ({ index }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [db_patients, db_getPatients] = useState([]);

  const handleShow = async () => {
    const result = await axios.get(`http://localhost:8080/getPatient?id=${index}`)
    db_getPatients(result.data);
    console.log(index);
    setShow(true);
  }

  return (
    <>
      <Button variant="primary btn-sm" onClick={handleShow}>View</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Name:</b> {db_patients.name}&nbsp;&nbsp;
          <b>Age:</b> {db_patients.age}<br/><br/>
          <b>History of presenting compliant:</b><br/> {db_patients.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewDescriptionModal;
