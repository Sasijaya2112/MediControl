import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddPatientModal = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <Button className='btn-success' onClick={() => setLgShow(true)}>Add Patient</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Patient Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of Visit</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Issue</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group>
                        <Button onClick={() => setLgShow(false)}>Submit</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AddPatientModal;
