import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './App.css'

function Navbars() {
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark" className="navbarr">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
