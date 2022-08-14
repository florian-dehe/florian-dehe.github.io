import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import Badge from "react-bootstrap/Badge"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"


function WorkExperienceItemModal(props) {
  return (
    <Modal { ...props } size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{ props.itemData.title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-5 p-2">
          <Image src={props.itemData.logo} fluid style={{ maxHeight: "12rem" }}/>
        </div>
        <h2 className="mb-3">{props.itemData.title}</h2>

        <div>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("briefcase")}/> Job title : </strong>  {props.itemData.job_title}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("building")}/> Company : </strong>  {props.itemData.company}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("building")}/> Service : </strong>  {props.itemData.service}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("location-dot")}/> Location : </strong>  {props.itemData.location}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("calendar")}/>  Duration : </strong> {props.itemData.time}
          </p>
        </div>

        <p className="my-3">{props.itemData.description}</p>

        { /* Skills */ }
        <div>
          <p className="fs-5">
            { props.itemData.skills.map(
              (skill) => <Badge key={skill.id} bg="secondary" className="mx-1">{ skill.name }</Badge>
            ) }
          </p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function WorkExperienceItem( { itemData } ) {

  const [ showModal, setShowModal ] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="shadow m-3 h-100" style={{ height: "10rem" }} border="light">
        <Row>
          <Col>
            <div className="h-100 p-2 d-flex flex-column justify-content-center">
              <Image src={itemData.logo} fluid />
            </div>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className="mb-3">{ itemData.title }</Card.Title>
              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("building")}/>  {itemData.company}</Card.Subtitle>
              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("location-dot")}/>  {itemData.location}</Card.Subtitle>
              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("calendar")}/>  {itemData.time}</Card.Subtitle>
              <Button variant="primary" className="mt-3" onClick={handleShow}>
                More information
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <WorkExperienceItemModal show={showModal} onHide={handleClose} itemData={itemData} />
  </>
  );
}

function WorkExperience() {

  const [educationData, setEducationData] = useState([]);

  useEffect( () => {

    fetch('json-api/work_experience.json')
      .then((response) => response.json())
      .then((data) => setEducationData(data.data));

  }, [])

  return (
    <div className="mt-3 mx-auto" style={{ maxWidth: "55rem" }}>
    { educationData.map(
      (item) => <WorkExperienceItem key={item.id} itemData={item}/>
    ) }
    </div>
  );
}

export default WorkExperience;
