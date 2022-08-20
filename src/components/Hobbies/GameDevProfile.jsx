
import ProjectList from "../Projects/ProjectList"

function GameDevProfile({ link }) {
  return (
    <div>
      <p className="fs-4">
        Here are my projects related to game development that can be found on
        this link <a href={ link } target="_blank" rel="noreferrer">here</a>.
      </p>

      <ProjectList api_link="json-api/game_dev_projects.json" />
    </div>
  );
}

export default GameDevProfile;
