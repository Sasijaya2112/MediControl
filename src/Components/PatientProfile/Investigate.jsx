import { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function Investigate({ value }) {
    const [lgShow, setLgShow] = useState(false);

    const [db_patientsById, db_getPatientById] = useState([]);

    const[dov,setDov]=useState('');
    const[bp,setBp]=useState('');
    const[height,setHeight]=useState();
    const[weight,setWeight]=useState();
    const[complaint,setComplaint]=useState('');
    const[history,setHistory]=useState('');
    const[identification,setIdentification]=useState('');
    const[prognosis,setPrognosis]=useState('');
    const[followup,setFollowup]=useState('');
    const[parentId,setParentId]=useState();

    const loadPatients = useCallback(async () => {
        const result = await axios.get(`http://localhost:8080/getRegisteredPatient?id=${value}`)
        db_getPatientById(result.data);
        console.log(result.data);
        const investigateResult = await axios.get(`http://localhost:8080/getInvestigation?id=${value}`)
        const{dov:iDov,bp:iBp,height:iHeight,weight:iWeight,complaint:iComplaint,history:iHistory,identification:iIdentification,prognosis:iPrognosis,followup:iFollowup}=investigateResult.data;
        setDov(iDov);
        setBp(iBp);
        setHeight(iHeight);
        setWeight(iWeight);
        setComplaint(iComplaint);
        setHistory(iHistory);
        setIdentification(iIdentification);
        setPrognosis(iPrognosis);
        setFollowup(iFollowup);
        console.log(investigateResult.data);
    }, [value])

    useEffect(() => {
        loadPatients();
    }, [loadPatients])

    const investigationDetails = {
        dov: dov,
        bp: bp,
        height: height,
        weight:weight,
        complaint: complaint,
        history: history,
        identification: identification,
        prognosis: prognosis,
        followup: followup,
        parentId: parentId
    }

    const report = {
        id:parentId,
        dov: dov,
        bp: bp,
        height: height,
        weight:weight,
        complaint: complaint,
        history: history,
        identification: identification,
        prognosis: prognosis,
        followup: followup,
        parentId:parentId
    }

    const handleOpen = () =>{
        setParentId(db_patientsById.id);
        setLgShow(true);
    }

    const handleSave = async() => {
        await axios.put(`http://localhost:8080/editInvestigation/${value}`, investigationDetails)
        await axios.post("http://localhost:8080/addReport", report)
        console.log(investigationDetails);
        setLgShow(false);
        window.location.reload(false);
        setDov('');
        setBp('');
        setComplaint('');
        setHistory('');
        setIdentification('');
        setPrognosis('');
        setFollowup('');
    }

    return (
        <>
            <Button className='btn-sm' onClick={handleOpen}>Investigate</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Patient Investigation - {db_patientsById.name}({db_patientsById.age})
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="d-flex gap-md-4 gap-sm-0 flex-wrap flex-md-nowrap">
                            <div className="d-flex gap-4 flex-sm-wrap flex-md-nowrap">
                                <Form.Group className="mb-3">
                                    <Form.Label>Date of Visit</Form.Label>
                                    <Form.Control type="date" placeholder="" value={dov} onChange={(e)=>setDov(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Blood Pressure</Form.Label>
                                    <Form.Control type="text" placeholder="" onChange={(e)=>setBp(e.target.value)}/>
                                </Form.Group>
                            </div>
                            <div className="d-flex gap-4 flex-sm-wrap flex-md-nowrap">
                                <Form.Group className="mb-3">
                                    <Form.Label>Height</Form.Label>
                                    <Form.Control type="text" placeholder="" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control type="text" placeholder="" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Present Complaint</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={(e)=>setComplaint(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>History of Presenting Complaint</Form.Label>
                            <Form.Control as="textarea" placeholder="" onChange={(e)=>setHistory(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Identification</Form.Label>
                            <Form.Control as="textarea" placeholder="" onChange={(e)=>setIdentification(e.target.value)}/>
                        </Form.Group>
                        <div className="d-flex gap-md-4 gap-sm-0 flex-wrap flex-md-nowrap">
                            <div className="d-flex gap-4 flex-sm-wrap flex-md-nowrap">
                                <Form.Group className="mb-3">
                                    <Form.Label>Prognosis </Form.Label>
                                    <Form.Control type="text" placeholder="" onChange={(e)=>setPrognosis(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Follow Up</Form.Label>
                                    <Form.Control type="date" placeholder="" onChange={(e)=>setFollowup(e.target.value)}/>
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload Report</Form.Label>
                                <Form.Control type="file" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="d-flex gap-3">
                            <Button className='btn-primary' onClick={handleSave}>Save</Button>
                            <Button className='btn-danger' onClick={() => setLgShow(false)}>Close</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Investigate;