import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IOrganizer } from "../Interfaces/dbObjects";

// interface OrganizerPageProps {
//   organizer: IOrganizer;
// }

//gonna have to fetch data about the organizer, since I want to populate upcoming events for that organizer too.....

type NullOrObject = null | IOrganizer;

function OrganizerPage() {
  const [organizer, setOrganizer] = useState<NullOrObject>(null);

  return (
    <>
      <Container>
        <Row>
          <Col md={6}> </Col>
        </Row>
      </Container>
    </>
  );
}

export default OrganizerPage;
