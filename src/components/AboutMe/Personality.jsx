import { useEffect, useState } from "react";
import { ProgressBarSkill, GlobalSkill } from "./Skills"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Personality() {
  const [ globals, setGlobals ] = useState([]);
  const [ languages, setLanguages ] = useState([]);

  useEffect( () => {
    fetch('json-api/personality.json')
      .then( response => response.json() )
      .then( data => {
        setGlobals(data.skills);
        setLanguages(data.languages);
      } )
  }, []);

  return (
    <Container fluid="sm">
      <Row>
        <Col>
          <div className="h-100 d-flex flex-column justify-content-center text-center">
            <div>
              { globals.map( (skill) => <GlobalSkill key={skill.id} skill={ skill }/> ) }
            </div>
        </div>
        </Col>
        <Col>
          { languages.map( (lang) => <ProgressBarSkill key={lang.id} skill={ lang } /> ) }
        </Col>
      </Row>
    </Container>
  );
}

export default Personality;
