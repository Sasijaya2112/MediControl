import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';



const Medication = () => {
    const [lgShow, setLgShow] = useState(false);
    const [tableData, setTableData] = useState([
        { id: 1, tablet: 'Dolo 650', fn: 1, an:0, night:1 },
        { id: 2, tablet: 'Crocin 500', fn: 0, an:0, night:1 },
        { id: 2, tablet: 'Amtas AT 50', fn: 1, an:0, night:1 },
        { id: 2, tablet: 'Tonact 10', fn: 1, an:0, night:1 },
        { id: 2, tablet: 'Pantocid 40', fn: 1, an:0, night:1 },
        { id: 2, tablet: 'Neurobion', fn: 0, an:0, night:1 }
      ]);

      const handleEdit = (rowIndex, field, value) => {
        const updatedData = tableData.map((row, index) =>
          index === rowIndex ? { ...row, [field]: value } : row
        );
        setTableData(updatedData);
      };

    const add = () =>{
        const newId = tableData.length + 1;
        setTableData([...tableData, {  id: newId, tablet: '', fn: 0, an:0, night:0 }]);
    }

    const deleteRow = (rowIndex) =>{
        const updatedData = tableData.filter((row, index) => index !== rowIndex);
    setTableData(updatedData);
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
                        Medication
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Button onClick={add}>Add row</Button>
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
                                {tableData.map((row,index)=>(
                                    <tr>
                                    <td>{index+1}</td>
                                    <td contenteditable="true" style={{maxWidth:'100px'}} onChange={(e)=>handleEdit(index,'tablet',e.target.value)}>{row.tablet}</td>
                                    <td contenteditable="true" onChange={(e)=>handleEdit(index,'fn',e.target.value)}>{row.fn}</td>
                                    <td contenteditable="true" onChange={(e)=>handleEdit(index,'an',e.target.value)}>{row.an}</td>
                                    <td contenteditable="true" onChange={(e)=>handleEdit(index,'night',e.target.value)}>{row.night}</td>
                                    <td><Button variant='danger btn-sm' onClick={()=>deleteRow(index)}>X</Button></td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Form>
                    <Button variant='success' style={{marginLeft:'45%'}} onClick={() => setLgShow(false)}>save</Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Medication;
