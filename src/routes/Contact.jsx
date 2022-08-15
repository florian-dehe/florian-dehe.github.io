
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"

function Contact() {
  return (
    <Container className="mt-5" fluid="md">
      <h1 className="display-3 text-center py-5 mt-5">Contact</h1>

      <h4>You can contact me via the different links listed here :</h4>

      <Container className="mt-5 w-75">
        <Row className="fs-3">
          <Col>
            <p>
              <FontAwesomeIcon icon={ brands("linkedin") }/>
              <a href="https://www.linkedin.com/in/florian-dehe/" target="_blank" rel="noreferrer">florian-dehe</a>
            </p>
          </Col>
          <Col>
            <p>
              <FontAwesomeIcon icon={ brands('github') }/>
              <a href="https://github.com/florian-dehe" target="_blank" rel="noreferrer">florian-dehe</a>
            </p>
          </Col>
          <Col>
            <p>
              <FontAwesomeIcon icon={ solid('envelope') }/>
              <a href="mailto:florian.dehe@gmail.com">florian.dehe@gmail.com</a>
            </p>
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default Contact;
