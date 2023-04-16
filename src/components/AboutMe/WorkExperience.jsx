import { useState } from "react";

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import Badge from "react-bootstrap/Badge"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

import work_experience from "../../json-data/work_experience.json"

function WorkExperienceItemModal(props) {
  return (
    <Modal { ...props } size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{ props.item.title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-5 p-2">
          <Image src={props.item.logo} fluid style={{ maxHeight: "12rem" }}/>
        </div>
        <h2 className="mb-3">{props.item.title}</h2>

        <div>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("briefcase")}/> Job title : </strong>  {props.item.job_title}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("building")}/> Company : </strong>  {props.item.company}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("building")}/> Service : </strong>  {props.item.service}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("location-dot")}/> Location : </strong>  {props.item.location}
          </p>
          <p className="mb-2">
            <strong><FontAwesomeIcon icon={solid("calendar")}/>  Duration : </strong> {props.item.time}
          </p>
        </div>

        <p className="my-3">{props.item.description}</p>

        { /* Skills */ }
        <div>
          <p className="fs-5">
            { props.item.skills.map(
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

function WorkExperienceItem( { item } ) {

  const [ showModal, setShowModal ] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="shadow m-3 h-100" style={{ height: "10rem" }} border="light">
        <Row>
          <Col>
            <div className="h-100 p-2 d-flex flex-row justify-content-center">
              <Image src={item.logo} fluid style={{ maxHeight: "12rem" }} />
            </div>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className="mb-3">{ item.title }</Card.Title>
              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("building")}/>  {item.company}</Card.Subtitle>
              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("location-dot")}/>  {item.location}</Card.Subtitle>
              <Card.Subtitle className="text-muted mb-2"><FontAwesomeIcon icon={solid("calendar")}/>  {item.time}</Card.Subtitle>
              <Button variant="primary" className="mt-3" onClick={handleShow}>
                More information
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <WorkExperienceItemModal show={showModal} onHide={handleClose} item={item} />
  </>
  );
}

function WorkExperience() {
  return (
    <div className="mt-3 mx-auto" style={{ maxWidth: "55rem" }}>
      { work_experience.data.map(
      (item) => <WorkExperienceItem key={item.id} item={item}/>
    ) }
    </div>
  );
}

export default WorkExperience;
