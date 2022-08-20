import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

function GameJamItem( { itemdata } ) {
  return (
    <>
      <Card className="shadow m-3 h-100" style={{ height: "9rem", width: "25rem"   }} border="light">
        <Image className="p-2 mx-auto" src={ itemdata.image } style={{ maxHeight: "14rem" }} />
        <Card.Body>
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <Card.Title className="mb-3">{ itemdata.title }</Card.Title>

              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("calendar")}/>  {itemdata.event}</Card.Subtitle>
            </div>

            <Card.Text>{ itemdata.description }</Card.Text>

            <Button variant="primary" target="_blank" rel="noreferrer" href={itemdata.entry_link}>
              Link <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
            </Button>
          </div>
        </Card.Body>
      </Card>
  </>
  );
}

function GameJams() {

  const [jams, setJams] = useState([]);
  const [profileLink, setProfileLink] = useState("");
  const [description, setDescription] = useState("");

  useEffect( () => {

    fetch('json-api/game_jams.json')
      .then((response) => response.json())
      .then((data) => {
        setJams(data.data);
        setProfileLink(data.jam_profile);
        setDescription(data.description);
      });

  }, [])

  return (
    <div>
      <div className="fs-4">
        <p>
          { description }
        </p>
        <p>
          <a href={ profileLink } target="_blank" rel="noreferrer">Here</a> is my profile on the
          site 'Alakajam' that hosts game jams. You can also find more information below on the different
          games I produced.
        </p>
      </div>
      <Row className="row-cols-auto justify-content-center">
        { jams.map(
          (item) => <Col key={item.id} className="my-2"> <GameJamItem itemdata={item}/> </Col>
        ) }
      </Row>
    </div>
  );
}

export default GameJams;
