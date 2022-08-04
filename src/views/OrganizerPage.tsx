import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { SiGooglemaps } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { IOrganizer } from "../Interfaces/dbObjects";

type NullOrObject = null | IOrganizer;

function OrganizerPage() {
  const [organizer, setOrganizer] = useState<NullOrObject>(null);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    fetchOrganizer();
  }, []);

  const fetchOrganizer = async () => {
    // have to fetch data about the organizer (not just pass as a state from homepage for example),
    //since I want to populate upcoming events for that organizer too.....
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/organizers/${params.id}`
      );
      if (response.ok) {
        let data: IOrganizer = await response.json();
        setOrganizer(data);
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
          <Col>
            <h1>{organizer?.name}</h1>
            <Row>
              <Col md={3}>
                <div>
                  <div>
                    <strong>
                      {" "}
                      <SiGooglemaps /> Adresa:
                    </strong>{" "}
                  </div>
                  <div>
                    {organizer?.street} {organizer?.streetNumber},{" "}
                    {organizer?.zip}, {organizer?.city}
                  </div>
                  <div>
                    <strong>
                      {" "}
                      <TbExternalLink /> Web:
                    </strong>{" "}
                  </div>
                  <a
                    href={`${organizer?.URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {organizer?.URL}
                  </a>
                </div>
              </Col>
              <Col md={3} className="mr-auto">
                <Image fluid src={organizer?.coverImg} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OrganizerPage;
