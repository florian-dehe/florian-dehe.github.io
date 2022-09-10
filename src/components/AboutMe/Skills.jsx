import ProgressBar from "react-bootstrap/ProgressBar"
import Badge from "react-bootstrap/Badge"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import skills from "../../json-data/skills.json"

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
  return (
    <div>
      <div className="text-center">
        { skills.global.map( (skill) => <GlobalSkill key={ skill.id } skill={ skill }/> ) }
      </div>

      <div>
        <Row>
          <Col md={6} sm={12}>
            { skills.programming.map(
              (skill) => <ProgressBarSkill key={skill.id} skill={ skill }/>
            ) }
          </Col>
          <Col>
            <div className="h-100 d-flex flex-column justify-content-center text-center">
              <div>
                { skills.technologies.map( (skill) => <TechSkill key={skill.id} skill={ skill }/> ) }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export { Skills, ProgressBarSkill, GlobalSkill };
