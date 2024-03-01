import { Container, Navbar, Nav } from 'react-bootstrap'; 
import "./index.css";
 
const Nave = () => {
  return (
    <>
      <section>
        <Navbar bg="primary" expand="lg">
          <Container className="p-3">
            <Navbar.Brand className="text-white" href="#home">
              YashCode4y
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto justify-content-end">
                <Nav.Link className="text-white " href="/">
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