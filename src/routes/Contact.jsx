
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"

function ContactLink(props) {
  return (
    <Button className="m-2 p-3" size="lg" variant="light" href={ props.link } target="_blank" rel="noreferrer">
    { props.children }
    </Button>
  );
}

function Contact() {
  return (
    <Container className="mt-5 h-75" fluid="md">
      <h1 className="display-3 text-center py-5 mt-5">Contact</h1>

      <h4>You can contact me via the different links listed here :</h4>

      <div className="d-flex flex-wrap justify-content-center mt-5">

        <ContactLink link="https://www.linkedin.com/in/florian-dehe" >
          <FontAwesomeIcon icon={ brands("linkedin") }/> florian-dehe
        </ContactLink>

        <ContactLink link="https://www.github.com/florian-dehe" >
          <FontAwesomeIcon icon={ brands("github") }/> florian-dehe
        </ContactLink>

        <ContactLink link="mailto:florian.dehe@utt.fr" >
          <FontAwesomeIcon icon={ solid("envelope") }/> florian.dehe@utt.fr
        </ContactLink>

      </div>

    </Container>
  );
}

export default Contact;
