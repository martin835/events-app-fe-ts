import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainFilter from "../components/MainFilter";
import OrganizerCard from "../components/OrganizerCard";
import { IOrganizer } from "../Interfaces/dbObjects";

const HomePage = () => {
  const [theaters, setTheaters] = useState<IOrganizer[]>([]);

  useEffect(() => {
    fetchTheaters();
  }, []);

  const fetchTheaters = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/organizers`);
      if (response.ok) {
        let data: IOrganizer[] = await response.json();
        setTheaters(data);
      } else {
        console.log("error while getting data from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            {" "}
            <MainFilter />
            <h2 className="mt-4">Zoznam divadiel: </h2>
            {theaters.map((organizer) => (
              <OrganizerCard organizer={organizer} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
