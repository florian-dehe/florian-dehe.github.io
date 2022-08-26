import { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container"

import Education from '../components/AboutMe/Education'
import WorkExperience from '../components/AboutMe/WorkExperience'
import { Skills } from "../components/AboutMe/Skills"
import Personality from "../components/AboutMe/Personality"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

function AboutMe() {

  const [ profile, setProfile ] = useState("");

  useEffect( () => {
    fetch("json-api/profile.json")
      .then( (response) => response.json() )
      .then( (data) => setProfile(data.data) )
  },[])

  return (
    <Container className="mt-5" fluid="md">
      <h1 className="display-3 text-center py-5 mt-5">About me</h1>

      <div className="fs-4 text-center">
        {profile}
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={solid("people-group")} /> Personality</h2>
        <Personality />
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={solid("briefcase")} /> Work Experience</h2>
        <WorkExperience />
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={solid("user-graduate")} /> Education</h2>
        <Education />
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={solid("gears")} /> Skills</h2>
        <Skills />
      </div>

    </Container>
  );
}

export default AboutMe;
