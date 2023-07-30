import React from 'react';
import Navbar2 from '../Navbar2';
import { Container } from 'react-bootstrap';
import RegisterPatientModal from './RegisterPatientModal';
import RegisteredTable from './RegisteredTable';
import { useState } from 'react';


const Register = () => {

    const [name,setName]=useState('')
    // const [search,setSearch]=useState('');

    const searchPatient = (e) =>{
        setName(e.target.value);
    }

    return (
        <div>
            <Navbar2/>
            <Container>
                <div className="row justify-content-md-center">
                    <div className='col-lg-4'>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control mt-5" placeholder="Search Patient" value={name} onChange={searchPatient}/>
                        </div>
                    </div>
                    <div className="col-md-auto mt-5">
                        <RegisterPatientModal/>
                    </div>
                    <RegisteredTable value={name}/>
                </div>

            </Container>
        </div>
    );
}

export default Register;
