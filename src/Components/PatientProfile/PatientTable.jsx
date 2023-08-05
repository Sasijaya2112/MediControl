import React from 'react';
import Medication from './Medication';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Investigate from './Investigate';
import Report from './ReportModal';

const PatientTable = ({ patientName }) => {

    const [db_patients, db_getPatients] = useState([]);

    useEffect(() => {
        loadPatients();
    }, [])

    const loadPatients = async () => {
        const result = await axios.get("http://localhost:8080/allPatientDemographics")
        console.log(result);
        db_getPatients(result.data);
    }

    const filteredPatients = db_patients.filter((row) =>
        row.name.toLowerCase().includes(patientName.toLowerCase())
    );


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
                        <th scope="col">Investigation</th>
                        <th scope="col">Medication</th>
                        <th scope="col">Report</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredPatients.map((row, index) => (
                            <tr key={row.id}>
                                <th scope="row">{row.id}</th>
                                <td>{row.name}</td>
                                <td>{row.dob}</td>
                                <td>{row.age}</td>
                                <td>{row.gender}</td>
                                <th scope="col">
                                    <Investigate value={row.id}/>
                                </th>
                                <th scope="col">
                                    <Medication value={row.id}/>
                                </th>
                                <th scope="col">
                                    <Report value={row.id}/>
                                </th>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}

export default PatientTable;
