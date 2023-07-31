import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import AddPatientModal from './AddPatientModal';
import PatientTable from './PatientTable';
import Navbar2 from '../Navbar2';

const Profile = () => {

    const [name,setName]=useState('')

    const searchPatient = (e) =>{
        setName(e.target.value);
    }
   
    return (
        <div>
            <Navbar2 />
            <Container>
                <div className="row justify-content-md-center">
                    <div className='col-lg-4'>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control mt-5" placeholder="Search Patient" onChange={searchPatient}/>
                            {/* <button className="btn btn-outline-secondary mt-5" onClick={handleSearch}>Search</button> */}
                        </div>
                    </div>
                    <div className="col-md-auto mt-5">
                        {/* <AddPatientModal/> */}
                    </div>
                    {/* <PatientTable value={search}/> */}
                    <PatientTable value={name}/>
                </div>
            </Container>
        </div>
    );
}

export default Profile;
