
import Container from "react-bootstrap/Container"

import ProjectList from "../components/Projects/ProjectList"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

import projects from "../json-data/projects.json"

function Projects() {
  return (
    <Container fluid="md">

      <div className="mt-5">
        <h1 className="display-3 text-center py-5 mt-5">Projects</h1>
      </div>

      <div className="mt-5 fs-4">
        <h2 className="display-5 my-3"><FontAwesomeIcon icon={solid("file-code")} /> About this portfolio</h2>
        <p>
          This portfolio has been made using React, React-Bootstrap and Node.js.
        </p>
        <p>
          You can find everything related to the project on the related
          Github repository <a href="https://github.com/florian-dehe/florian-dehe.github.io"
                               target="_blank" rel="noreferrer" > here</a>
        </p>
      </div>

      <div className="mt-5 fs-4">
        <h2 className="display-5 my-3"><FontAwesomeIcon icon={solid("laptop-code")} /> My projects</h2>
        <p>
          The list of the projects I worked on so far :
        </p>
        <ProjectList list_data={ projects.data } />
      </div>

    </Container>
  );
}

export default Projects;
