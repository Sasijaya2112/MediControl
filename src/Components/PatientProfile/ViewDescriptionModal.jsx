import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const ViewDescriptionModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary btn-sm" onClick={handleShow}>
        View
      </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam molestiae aliquid mollitia ipsum quaerat, asperiores magnam dolore ex praesentium sapiente id quas iusto sint placeat rem explicabo laudantium aperiam.</p>
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
