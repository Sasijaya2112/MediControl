import React from 'react';
import { useState, useEffect ,useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Medication = ({value}) => {
    const [lgShow, setLgShow] = useState(false);

    const[tablet,setTablet]=useState('');
    const[forenoon,setForenoon]=useState();
    const[afternoon,setAfternoon]=useState();
    const[night,setNight]=useState();

    const[db_medication,db_getMedication]=useState([])
    const [db_patientsById, db_getPatientById] = useState([]);
    const loadPatients = useCallback(async () => {
        const result = await axios.get(`http://localhost:8080/getRegisteredPatient?id=${value}`)
        const medicine = await axios.get(`http://localhost:8080/getMedicine/${value}`)
        db_getPatientById(result.data);
        db_getMedication(medicine.data);
        console.log(result.data);
    }, [value])

    useEffect(() => {
        loadPatients();
    }, [loadPatients])

    const medication = {
        tablet:tablet.toUpperCase(),
        forenoon:forenoon,
        afternoon:afternoon,
        night:night,
        parentId:db_patientsById.id
    }

    const add = async () =>{
        await axios.post("http://localhost:8080/addMedicine",medication)
        console.log(medication);
        setTablet('');
        setForenoon('');
        setAfternoon('');
        setNight('');
        loadPatients();
    }

    const deleteRow = async (rowIndex) =>{
        await axios.delete(`http://localhost:8080/deleteMedicine/${rowIndex}`)
        loadPatients();
    }

    return (
        <div>
            <Button className='btn-sm btn-info' onClick={() => setLgShow(true)}>Add/Show</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Medication - {db_patientsById.name} ({db_patientsById.age})
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control type='text' placeholder='Tablet name' value={tablet} onChange={(e)=>setTablet(e.target.value)}/>
                            <div className="medication-tab-nos d-flex gap-3 mt-3">
                            ​​​​​​​​​​​​​​​​​<Form.Control type='number' placeholder='FN' value={forenoon} onChange={(e)=>setForenoon(e.target.value)}/>
                            <Form.Control type='number' placeholder='AN' value={afternoon} onChange={(e)=>setAfternoon(e.target.value)}/>
                            <Form.Control type='number' placeholder='Night' value={night} onChange={(e)=>setNight(e.target.value)}/>
                            <Button onClick={add}>Add</Button>
                            </div>
                        </Form.Group>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className='col-1'>S.No.</th>
                                    <th>Tablet</th>
                                    <th className='col-1'>FN</th>
                                    <th className='col-1'>AN</th>
                                    <th className='col-1'>Night</th>
                                    <th className='col-1'>Del</th>
                                </tr>
                            </thead>
                            <tbody>
                                {db_medication.map((row,index)=>(
                                    <tr>
                                    <td>{index+1}</td>
                                    <td style={{maxWidth:'100px'}} >{row.tablet}</td>
                                    <td >{row.forenoon}</td>
                                    <td >{row.afternoon}</td>
                                    <td >{row.night}</td>
                                    <td><Button variant='danger btn-sm' onClick={()=>deleteRow(row.id)}>X</Button></td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Form>
                    <Button variant='danger' style={{marginLeft:'45%'}} onClick={() => setLgShow(false)}>Close</Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Medication;
