import { useState, useEffect } from "react";

import ProgressBar from "react-bootstrap/ProgressBar"
import Badge from "react-bootstrap/Badge"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function ProgressBarSkill({ skill }) {
  return (
    <div className="my-3">
      <p className="mb-2 fs-5">{ skill.name }</p>
      <ProgressBar now={ skill.level }/>
    </div>
  );
}

function TechSkill( { skill } ) {
  return (
    <Badge bg='info' className="m-1 fs-4">{ skill.name }</Badge>
  );
}

function GlobalSkill( { skill } ) {
  return (
    <Badge bg='secondary' className="m-1 fs-4">{ skill.name }</Badge>
  );
}

function Skills() {

  const [ global, setGlobal ] = useState([]);
  const [ prog, setProg ] = useState([]);
  const [ tech, setTech ] = useState([]);

  useEffect(() => {
    fetch("json-api/skills.json")
      .then( response => response.json() )
      .then( (response) => {
        setGlobal(response.data.global);
        setProg(response.data.programming);
        setTech(response.data.technologies);
      } );
  }, []);

  return (
    <div>
      <div className="text-center">
        { global.map( (skill) => <GlobalSkill key={ skill.id } skill={ skill }/> ) }
      </div>

      <div>
        <Row>
          <Col md={6} sm={12}>
            { prog.map(
              (skill) => <ProgressBarSkill key={skill.id} skill={ skill }/>
            ) }
          </Col>
          <Col>
            <div className="h-100 d-flex flex-column justify-content-center text-center">
              <div>
                { tech.map( (skill) => <TechSkill key={skill.id} skill={ skill }/> ) }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export { Skills, ProgressBarSkill, GlobalSkill };
