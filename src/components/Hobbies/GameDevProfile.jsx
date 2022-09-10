
import ProjectList from "../Projects/ProjectList"

import gameDevProjects from "../../json-data/game_dev_projects.json"

function GameDevProfile({ link }) {
  return (
    <div>
      <p className="fs-4">
        Here are my projects related to game development that can be found on
        this link <a href={ link } target="_blank" rel="noreferrer">here</a>.
      </p>

    <ProjectList list_data={ gameDevProjects.data } />
    </div>
  );
}

export default GameDevProfile;
