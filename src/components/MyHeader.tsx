import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaTheaterMasks } from "react-icons/fa";

function MyHeader() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="primary"
      //   style={{ backgroundColor: "var(--bs-indigo)" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <FaTheaterMasks /> Repertoár{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#deets">+Pridať akciu</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Môj profil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyHeader;
