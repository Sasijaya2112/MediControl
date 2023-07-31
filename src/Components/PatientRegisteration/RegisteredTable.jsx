import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect,useState } from 'react';
import EditRegisteredDetails from './EditRegisteredDetails';

const RegisteredTable = ({value,edit}) => {

    const [db_patients, db_getPatients] = useState([]);

    useEffect(() => {
        loadPatients();
    }, [])

    const loadPatients = async () => {
        const result = await axios.get("http://localhost:8080/allPatientDemographics")
        console.log(result);
        db_getPatients(result.data);
    }

    const deletePatient = async (id) => {
        await axios.delete(`http://localhost:8080/deleteRegisteredPatient/${id}`)
        loadPatients();
    }

    const filteredPatients = db_patients.filter((row) =>
        row.name.toLowerCase().includes(value.toLowerCase())
    );

    const edits = edit.toString();

    return (
        <div class="table-responsive">
            <table class="table mt-4 table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Address</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    filteredPatients.map((row, index) => (
                        <tr key={row.id}>
                            <th scope="row">{row.id}</th>
                            <td contenteditable={edits}>{row.name}</td>
                            <td contenteditable={edits}>{row.dob}</td>
                            <td contenteditable={edits}>{row.age}</td>
                            <td contenteditable={edits}>{row.gender}</td>
                            <td contenteditable={edits}>{row.phone}</td>
                            <td contenteditable={edits}>{row.address}</td>
                            <th scope="col">
                                {/* <Button className='btn-sm btn-primary' onClick={()=>handleUpdate(row.id)}>Update</Button> */}
                                <EditRegisteredDetails value={row.id}/>
                            </th>
                            <th scope="col">
                                <Button className='btn-sm btn-danger' onClick={() => deletePatient(row.id)}>Delete</Button>
                            </th>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    );
}

export default RegisteredTable;
