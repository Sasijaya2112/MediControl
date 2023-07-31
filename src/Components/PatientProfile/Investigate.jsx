import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function Investigate() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button className='btn-sm' onClick={() => setLgShow(true)}>Investigate</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Patient Investigation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="d-flex gap-4">
                            <Form.Group className="mb-3">
                                <Form.Label>Date of Visit</Form.Label>
                                <Form.Control type="date" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Blood Pressure</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Height</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Present Complaint</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>History of Present Complaint</Form.Label>
                            <Form.Control as="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Identification</Form.Label>
                            <Form.Control as="textarea" placeholder="" />
                        </Form.Group>
                        <div className="d-flex gap-4">
                            <Form.Group className="mb-3">
                                <Form.Label>Prognosis (Long Term) </Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Follow Up</Form.Label>
                                <Form.Control type="date" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload Report</Form.Label>
                                <Form.Control type="file" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="d-flex gap-3">
                            <Button className='btn-primary'>Save</Button>
                            <Button className='btn-danger' onClick={() => setLgShow(false)}>Close</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Investigate;