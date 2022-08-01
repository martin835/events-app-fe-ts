import { Col, Container, Row } from "react-bootstrap";
import MainFilter from "../components/MainFilter";

function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            {" "}
            <MainFilter />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
