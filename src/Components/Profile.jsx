import React from 'react';
import Navbar2 from './Navbar2';
import { Container } from 'react-bootstrap';
import AddPatientModal from './AddPatientModal';
import PatientTable from './PatientTable';

const Profile = () => {
    return (
        <div>
            <Navbar2 />
            <Container>
                <div className="row justify-content-md-center">
                    <div className='col-lg-4'>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control mt-5" placeholder="Search Patient" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary mt-5" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                    <div className="col-md-auto mt-5">
                        <AddPatientModal/>
                    </div>
                    <PatientTable/>
                </div>

            </Container>
        </div>
    );
}

export default Profile;
