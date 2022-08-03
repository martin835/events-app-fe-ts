import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IOrganizer } from "../Interfaces/dbObjects";

interface OrganizerCardProps {
  organizer: IOrganizer;
}

const OrganizerCard = (props: OrganizerCardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${[props.organizer.coverImg]}`} />
        <Card.Body>
          <Card.Title>{props.organizer.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate(`organizer/${props.organizer._id}`)}
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default OrganizerCard;
