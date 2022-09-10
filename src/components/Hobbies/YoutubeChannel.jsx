import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

import youtubeData from "../../json-data/youtube.json"

function YoutubeChannel() {
  return (
    <div>
      <div className="fs-4">
        <p>{ youtubeData.description }</p>
        <p>You can find more information below.</p>
      </div>

      <div className="d-flex justify-content-center">
        <Card className="shadow m-3 h-100" style={{ height: "9rem", width: "40rem" }} border="light">
          <Card.Body>
            <Row>
              <Col className="d-flex justify-content-center">
                <div className="text-center d-inline-flex flex-column justify-content-center">
                  <Image src={ youtubeData.channel_data.image } style={{ borderRadius: "50%" }}/>
                  <Card.Title className="my-3 fs-3">{ youtubeData.channel_data.name }</Card.Title>
                </div>
              </Col>
              <Col>
                <div className="fs-5 text-muted h-100 p-2 d-inline-flex flex-column justify-content-center">
                  <p><FontAwesomeIcon icon={ solid("user") }/> { youtubeData.channel_stats.subscribers } subscribers</p>
                  <p><FontAwesomeIcon icon={ solid("eye") }/> { youtubeData.channel_stats.total_views } total views</p>
                  <p><FontAwesomeIcon icon={ solid("film") }/> { youtubeData.channel_stats.videos } videos</p>
                  <p><FontAwesomeIcon icon={ solid("calendar") }/> Since { youtubeData.channel_stats.creation_date }</p>

                  <Button variant="primary" target="_blank" rel="noreferrer" href={youtubeData.channel_data.link}>
                    Link <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default YoutubeChannel;
