import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const EditRegisteredDetails = () => {
    const [lgShow, setLgShow] = useState(false);

    const[dob,setDob]=useState('');
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[gender,setGender]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');

    const addPatient=async(e)=>{
        e.preventDefault();
         const values = {
            name:name,
            dob:dob,
            age:age,
            gender:gender,
            phone:phone,
            address:address
        }
        await axios.post("http://localhost:8080/registerPatient",values)
        console.log(values);
        window.location.reload(false);
        setLgShow(false);
    }

    return (
        <div>
            <Button className='btn-primary btn-sm' onClick={() => setLgShow(true)}>Update</Button>
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
                            <Form.Control type="text" placeholder="" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="" value={dob} onChange={(e)=>setDob(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="" value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="" value={gender} onChange={(e)=>setGender(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone No.</Form.Label>
                            <Form.Control type="text" placeholder="" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} value={address} onChange={(e)=>setAddress(e.target.value)}/>
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


export default EditRegisteredDetails;

