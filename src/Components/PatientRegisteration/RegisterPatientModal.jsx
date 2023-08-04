import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const RegisterPatientModal = () => {
    const [lgShow, setLgShow] = useState(false);

    const [dob, setDob] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // getting current date
    const currentDate = new Date();

    // Extract the individual date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = currentDate.getDate();

    // Format the date to display as 'YYYY-MM-DD'
    const todayDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    // creating random patient ID
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;


    const investigate = {
        id: randomNumber,
        dov: todayDate,
        bp: "",
        height: "",
        weight: "",
        complaint: "",
        history: "",
        identification: "",
        prognosis: "",
        followup: "",
        parentId: ""
    }

    const addPatient = async (e) => {
        e.preventDefault();
        const values = {
            id: randomNumber,
            name: name,
            dob: dob,
            age: age,
            gender: gender.toUpperCase(),
            phone: phone,
            address: address,
            investigation: investigate
        }
        await axios.post("http://localhost:8080/registerPatient", values)
        await axios.post("http://localhost:8080/patientInvestigation", investigate)
        console.log(values);
        window.location.reload(false);
        setLgShow(false);
    }

    return (
        <div>
            <Button className='btn-success' onClick={() => setLgShow(true)}>Register Patient</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Patient Demographics
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="" onChange={(e) => setDob(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={(e) => setAge(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={(e) => setGender(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone No.</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Button onClick={addPatient}>Submit</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}


export default RegisterPatientModal;

