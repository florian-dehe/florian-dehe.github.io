
import Container from "react-bootstrap/Container"

import ProjectList from "../components/Projects/ProjectList"


function Projects() {
  return (
    <Container className="mt-5" fluid="md">
      <h1 className="display-3 text-center py-5 mt-5">Projects</h1>

      <ProjectList />
    </Container>
  );
}

export default Projects;
