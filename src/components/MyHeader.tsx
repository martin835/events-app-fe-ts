import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaTheaterMasks } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Navbar.Brand>
          {" "}
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            <FaTheaterMasks className="mb-1" /> Repertoár
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">+Pridať akciu</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Môj profil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyHeader;
