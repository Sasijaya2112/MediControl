import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const AddPatientModal = () => {
    const [lgShow, setLgShow] = useState(false);

    const[dov,setDov]=useState('');
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[issue,setIssue]=useState('');
    const[description,setDesc]=useState('');

    const addPatient=async(e)=>{
        e.preventDefault();
         const values = {
            dov:dov,
            name:name,
            age:age,
            issue:issue,
            description:description
        }
        await axios.post("http://localhost:8080/addPatient",values)
        console.log(values);
        window.location.reload(false);
        setLgShow(false);
    }

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
                    Patient Demographics
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of Visit</Form.Label>
                            <Form.Control type="date" placeholder="" value={dov} onChange={(e)=>setDov(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="" value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Presenting complaint</Form.Label>
                            <Form.Control type="text" placeholder="" value={issue} onChange={(e)=>setIssue(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description (History of complaint)</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDesc(e.target.value)}/>
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


export default AddPatientModal;

