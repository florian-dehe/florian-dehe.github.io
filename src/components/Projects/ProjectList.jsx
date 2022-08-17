import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import Badge from "react-bootstrap/Badge"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"


function ProjectItemModal(props) {
  return (
    <Modal { ...props } size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{ props.itemdata.title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-5 p-2">
          <Image src={props.itemdata.logo} fluid style={{ maxHeight: "12rem"}}/>
        </div>
        <h2 className="mb-3">{props.itemdata.title}</h2>

        <div>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("calendar")}/>  Duration : </strong> {props.itemdata.time}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("code-compare")}/>  Status : </strong> {props.itemdata.status}
          </p>
        </div>

        <p className="my-3">{props.itemdata.description}</p>

        { /* Skills */ }
        <div>
          <p className="fs-5">
            { props.itemdata.skills.map(
              (skill) => <Badge key={skill.id} bg="secondary" className="mx-1">{ skill.name }</Badge>
            ) }
          </p>
        </div>

        <Button variant="primary" target="_blank" rel="noreferrer" href={props.itemdata.link}>
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

function ProjectItem( { itemdata } ) {

  const [ showModal, setShowModal ] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="shadow m-3 h-100" style={{ height: "9rem", width: "25rem"   }} border="light">
        <Image className="p-2 mx-auto" src={ itemdata.logo } style={{ maxHeight: "14rem" }} />
        <Card.Body>
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <Card.Title className="mb-3">{ itemdata.title }</Card.Title>

              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("calendar")}/>  {itemdata.time}</Card.Subtitle>
              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("code-compare")}/>  {itemdata.status}</Card.Subtitle>
            </div>

            <Card.Text>{ itemdata.short_description }</Card.Text>

            <Button variant="primary" onClick={handleShow}>
              More information
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ProjectItemModal show={showModal} onHide={handleClose} itemdata={itemdata} />
  </>
  );
}

function ProjectList() {

  const [projects, setProjects] = useState([]);

  useEffect( () => {

    fetch('json-api/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data.data));

  }, [])

  return (
    <Container className="mt-3 mx-auto">
      <Row className="row-cols-auto justify-content-center">
        { projects.map(
          (item) => <Col key={item.id} className="my-2"> <ProjectItem itemdata={item}/> </Col>
        ) }
      </Row>
    </Container>
  );
}

export default ProjectList;
