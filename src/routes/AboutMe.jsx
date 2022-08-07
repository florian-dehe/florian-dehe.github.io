import { useEffect, useState } from 'react';
import Education from '../components/AboutMe/Education'

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
    <div className="container">
      <h1 className="title">About me</h1>

      <div className="text">
        {profile}
      </div>

      <div>
        <h2 className="subtitle"><FontAwesomeIcon icon={solid("gears")} /> Skills</h2>
        <div>
          My skills
        </div>
      </div>

      <div>
        <h2 className="subtitle"><FontAwesomeIcon icon={solid("graduation-cap")} /> Education</h2>
        <Education />
      </div>

      <div>
        <h2 className="subtitle"><FontAwesomeIcon icon={solid("briefcase")} /> Work Experience</h2>
        <div>My work experience</div>
      </div>

    </div>
  );
}

export default AboutMe;
