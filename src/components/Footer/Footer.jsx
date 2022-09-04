
import Container from "react-bootstrap/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"

function Footer() {
  return (
    <footer>
      <Container className="py-3 mt-5">
        <p class="text-center text-muted border-top py-3">Made by <a href="https://github.com/florian-dehe"
                                                                     target="_blank" rel="noreferrer">
                                                                    <FontAwesomeIcon icon={ brands("github") }/> florian-dehe
                                                                  </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
