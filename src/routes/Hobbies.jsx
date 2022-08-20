import { useEffect, useState } from "react"

import Container from "react-bootstrap/Container"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"

import GameJams from "../components/Hobbies/GameJams"
import YoutubeChannel from "../components/Hobbies/YoutubeChannel"
import GameDevProfile from "../components/Hobbies/GameDevProfile"

function Hobbies() {

  const [ description, setDescription ] = useState("");
  const [ gameDevProfileLink, setGameDevProfileLink ] = useState("");

  useEffect( () => {
    fetch("json-api/hobbies.json")
      .then( (response) => response.json() )
      .then( (data) => {
        setDescription(data.description);
        setGameDevProfileLink(data.game_dev_profile);
      })
  },[])

  return (
    <Container className="mt-5" fluid="md">
      <h1 className="display-3 text-center py-5 mt-5">Hobbies</h1>

      <div className="fs-3 text-center">
        { description }
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={solid("gamepad")} /> Game Jams</h2>
        <GameJams />
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={brands("youtube")} /> Youtube</h2>
        <YoutubeChannel />
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={brands("github")} /> Game Development Profile</h2>
        <GameDevProfile link={ gameDevProfileLink }/>
      </div>
    </Container>
  );
}

export default Hobbies;
