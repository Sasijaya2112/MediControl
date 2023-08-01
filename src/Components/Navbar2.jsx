import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

const Navbar2 = () => {

    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(true);
    };
    return (
      
<Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontWeight:"bold"}} className='text-light fs-4'>MediControl</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home" className={`navtext text-light mx-4  ${isClicked ? 'focus-visible' : ''}`} onClick={handleClick}>Home</Nav.Link>
            <Nav.Link href="/patientregister" className={`navtext text-light mx-4  ${isClicked ? 'focus-visible' : ''}`}>Patient Registeration</Nav.Link>
            <Nav.Link href="/profile" className='navtext text-light mx-4'>Patient Profile</Nav.Link>
            <Nav.Link href="/reports" className='navtext text-light mx-4'>Report</Nav.Link>
          </Nav>
          <Nav.Link href="/login"><Button variant="btn btn-danger">Log out</Button></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navbar2;
