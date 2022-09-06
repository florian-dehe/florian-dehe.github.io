import { LinkContainer } from "react-router-bootstrap"

import Button from "react-bootstrap/Button"

function HomeHeader() {
  return (
    <div className="d-flex justify-content-center h-75">
      <div className="my-auto">
        <h2>
          Hi, my name is
        </h2>
        <h1 className="display-1">
          Florian DEHE
        </h1>
        <div className="d-flex justify-content-center">
          <LinkContainer to="/about-me">
            <Button size="lg">Discover who I am</Button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
