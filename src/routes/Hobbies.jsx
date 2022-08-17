
import Container from "react-bootstrap/Container"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"

function Hobbies() {
  return (
    <Container className="mt-5" fluid="md">
      <h1 className="display-3 text-center py-5 mt-5">Hobbies</h1>

      <div className="fs-4 text-center">
        Hobbies text general
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={solid("gamepad")} /> Game Jams</h2>
        <p>Some text</p>
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={brands("youtube")} /> Youtube</h2>
        <p>Some text</p>
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={brands("github")} /> Game Development Profile</h2>
        <p>Some text</p>
      </div>
    </Container>
  );
}

export default Hobbies;
