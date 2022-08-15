import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './foot.css';

function Foot() {
    return (
        <Navbar className="footer" fixed="bottom" expand="lg" bg="light" variant="dark">
        <Container className="justify-content-center">
             &copy; {new Date().getFullYear()} Centennial Survey. All Rights Reserved.
        </Container>
      </Navbar>   
    
    )
};
    export default Foot;
