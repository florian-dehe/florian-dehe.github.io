import { Link } from 'react-router-dom'

import './HomeHeader.scss'

function HomeHeader() {
  return (
    <div className="home-main">
      <div>
        <div className="home-intro">
          Hi, my name is
        </div>
        <div className="home-name">
          Florian Dehé
        </div>
        <div className="home-discover-btn">
          <Link to='/about-me' className="btn">Discover who I am</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
