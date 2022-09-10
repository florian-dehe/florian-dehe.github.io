import { LinkContainer } from "react-router-bootstrap"

import Image from "react-bootstrap/Image"

import Button from "react-bootstrap/Button"

function HomeHeader() {
  return (
    <div className="d-flex justify-content-center h-75">
      <div className="my-auto">
        
        <div className="mb-5 d-flex justify-content-center">
          <Image src="images/profile.png" style={{ borderRadius: "50%", maxWidth: "20rem" }}/>
        </div>
        
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
