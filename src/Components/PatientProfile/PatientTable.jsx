import React from 'react';
import Button from 'react-bootstrap/Button';
// import ViewDescriptionModal from './ViewDescriptionModal';
import Medication from './Medication';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Investigate from './Investigate';

const PatientTable = ({ value }) => {

    const [db_patients, db_getPatients] = useState([]);

    useEffect(() => {
        loadPatients();
    }, [])

    // const loadPatients = async () => {
    //     const result = await axios.get("http://localhost:8080/patient-details")
    //     console.log(result);
    //     db_getPatients(result.data);
    // }

    const loadPatients = async () => {
        const result = await axios.get("http://localhost:8080/allPatientDemographics")
        console.log(result);
        db_getPatients(result.data);
    }

    // const deletePatient = async (id) => {
    //     await axios.delete(`http://localhost:8080/deletePatient/${id}`)
    //     loadPatients();
    // }

    const filteredPatients = db_patients.filter((row) =>
        row.name.toLowerCase().includes(value.toLowerCase())
    );


    return (
        <div class="table-responsive">
            <table class="table mt-4 table-striped table-bordered">
                <thead>
                    <tr>
                        {/* <th scope="col">Patient ID</th>
                        <th scope="col">DOV</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Presenting complaint</th>
                        <th scope="col">Description</th>
                        <th scope="col">Medication</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th> */}

                        <th scope="col">Patient ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Investigation</th>
                        <th scope="col">Medication</th>
                        <th scope="col">Report</th>
                        {/* <th scope="col">Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        filteredPatients.map((row, index) => (
                            <tr key={row.id}>
                                <th scope="row">{row.id}</th>
                                <td>{row.dov}</td>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.issue}</td>
                                <th scope="col">
                                    <ViewDescriptionModal index={row.id} />
                                </th>
                                <th scope="col">
                                    <Medication />
                                </th>
                                <th scope="col">
                                    <Button className='btn-sm btn-warning'>Edit</Button>
                                </th>
                                <th scope="col">
                                    <Button className='btn-sm btn-danger' onClick={() => deletePatient(row.id)}>Delete</Button>
                                </th>
                            </tr>
                        ))
                    } */}

                    {
                        filteredPatients.map((row, index) => (
                            <tr key={row.id}>
                                <th scope="row">{row.id}</th>
                                <td>{row.name}</td>
                                <td>{row.dob}</td>
                                <td>{row.age}</td>
                                <td>{row.gender}</td>
                                <th scope="col">
                                    {/* <ViewDescriptionModal index={row.id} /> */}
                                    <Investigate />
                                </th>
                                <th scope="col">
                                    <Medication />
                                </th>
                                <th scope="col">
                                    <Button className='btn-sm btn-danger'>View</Button>
                                </th>
                                {/* <th scope="col">
                                    <Button className='btn-sm btn-danger' onClick={() => deletePatient(row.id)}>Delete</Button>
                                </th> */}
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}

export default PatientTable;
