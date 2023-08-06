import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function DeleteModal({value}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const deletePatient = async () => {
        await axios.delete(`http://localhost:8080/deleteRegisteredPatient/${value}`)
        await axios.delete(`http://localhost:8080/deleteInvestigation/${value}`)
        await axios.delete(`http://localhost:8080/deleteReport/${value}`)
        handleClose();
        window.location.reload(false);
    }

  return (
    <>
      <Button variant="danger btn-sm" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your data will be permenantly deleted and can't be retreived. Do you want to proceed?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deletePatient}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;