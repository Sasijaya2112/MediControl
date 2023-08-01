import React from 'react';
import Navbar2 from '../Navbar2';
import { Container } from 'react-bootstrap';
import RegisterPatientModal from './RegisterPatientModal';
import RegisteredTable from './RegisteredTable';
import { useState } from 'react';

const Register = () => {

    const [name, setName] = useState('')

    const searchPatient = (e) => {
        setName(e.target.value);
    }

  const handleClear = () => {
    setName('');
  }

    return (
        <div>
            <Navbar2 />
            <p className='fs-3 mt-4 text-secondary'>Patient Registeration</p>
            <Container className='register-container'>
                <div className="row justify-content-md-center">
                <div className="col-md-auto mt-5 d-flex">
                        <RegisterPatientModal />
                    </div>
                    <div className='col-lg-4'>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control mt-5" placeholder="Search Patient" value={name} onChange={searchPatient} />
                            <button className="btn btn-outline-danger mt-5" onClick={handleClear}>Clear</button>
                        </div>
                    </div>
                    <RegisteredTable value={name} />
                </div>
            </Container>
        </div>
    );
}

export default Register;
