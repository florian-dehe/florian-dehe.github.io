import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"


function GameJamItemModal(props) {
  return (
    <Modal { ...props } size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{ props.itemdata.title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-5 p-2">
          <Image src={props.itemdata.image} fluid style={{ maxHeight: "12rem"}}/>
        </div>
        <h2 className="mb-3">{props.itemdata.title}</h2>

        <div>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("calendar")}/>  Event : </strong> {props.itemdata.event}
          </p>
        </div>

        <p className="my-3">{props.itemdata.description}</p>

        <Button variant="primary" target="_blank" rel="noreferrer" href={props.itemdata.entry_link}>
          Link <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
        </Button>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function GameJamItem( { itemdata } ) {

  const [ showModal, setShowModal ] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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

            <Button variant="primary" onClick={handleShow}>
              More information
            </Button>
          </div>
        </Card.Body>
      </Card>
      <GameJamItemModal show={showModal} onHide={handleClose} itemdata={itemdata} />
  </>
  );
}

function GameJams() {

  const [jams, setJams] = useState([]);
  const [profileLink, setProfileLink] = useState("");
  const [text, setText] = useState("");

  useEffect( () => {

    fetch('json-api/game_jams.json')
      .then((response) => response.json())
      .then((data) => {
        setJams(data.data);
        setProfileLink(data.jam_profile);
        setText(data.text);
      });

  }, [])

  return (
    <div>
      <p>{ text }</p>
      <a href={ profileLink }>{ profileLink }</a>
      <Row className="row-cols-auto justify-content-center">
        { jams.map(
          (item) => <Col key={item.id} className="my-2"> <GameJamItem itemdata={item}/> </Col>
        ) }
      </Row>
    </div>
  );
}

export default GameJams;
