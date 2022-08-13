import { LinkContainer } from "react-router-bootstrap"

function HomeHeader() {
  return (
    <div className="d-flex justify-content-center h-75">
      <div className="my-auto">
        <h2>
          Hi, my name is
        </h2>
        <h1 className="display-1">
          Florian Dehé
        </h1>
        <div className="d-flex justify-content-center">
          <LinkContainer to="/about-me">
            <button type="button" className="btn btn-primary">Discover who I am</button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
