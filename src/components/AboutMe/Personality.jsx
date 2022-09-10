import { ProgressBarSkill, GlobalSkill } from "./Skills"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import personality from "../../json-data/personality.json"

function Personality() {

  return (
    <Container fluid="sm">
      <Row>
        <Col md={6} sm={12}>
          <div className="h-100 d-flex flex-column justify-content-center text-center">
            <div>
              { personality.skills.map( (skill) => <GlobalSkill key={skill.id} skill={ skill }/> ) }
            </div>
        </div>
        </Col>
        <Col>
          { personality.languages.map( (lang) => <ProgressBarSkill key={lang.id} skill={ lang } /> ) }
        </Col>
      </Row>
    </Container>
  );
}

export default Personality;
