import Container from "react-bootstrap/Container"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"

import GameJams from "../components/Hobbies/GameJams"
import YoutubeChannel from "../components/Hobbies/YoutubeChannel"
import GameDevProfile from "../components/Hobbies/GameDevProfile"

import hobbiesData from "../json-data/hobbies.json"

function Hobbies() {
  return (
    <Container className="mt-5" fluid="md">
      <h1 className="display-3 text-center py-5 mt-5">Hobbies</h1>

      <div className="fs-3 text-center">
        { hobbiesData.description }
      </div>

      <div className="my-5">
        <h2 className="display-5"><FontAwesomeIcon icon={solid("book-open")} /> Comics</h2>

        <div className="fs-4">
          <p>
            I like reading comics in my free time. I find very interesting the mix between the art
            and the story behind the images. It gives an other dimension in the storytelling, something
            similar that we can find in cinema and video games. I mostly read stories from the DC universe
            which I like more than other comics series.
          </p>
          <p>
            Because of this, I also really like cinema. It adds another layer of storytelling which allows
            the spectator to receive the emotions transmitted by the movie and feel compassion for the main charater
            for example. That is why, cinema has also a important place in the things that I like.
          </p>
        </div>

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
        <GameDevProfile link={ hobbiesData.game_dev_profile }/>
      </div>
    </Container>
  );
}

export default Hobbies;
