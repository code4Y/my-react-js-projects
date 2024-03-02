import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'; 

const Nave = () => {
  return (
    <>
      <section>
        <Navbar bg="primary" expand="lg">
          <Container fluid className="p-3"> {/* Use fluid for full-width container */}
            <Navbar.Brand className="text-white" href="#home">
              YashCode4y
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto justify-content-end">
                <Nav.Link className="text-white" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="/view">
                  Employee
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Nave;