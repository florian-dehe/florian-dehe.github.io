import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

import './Education.scss'

function EducationItem( { itemData } ) {
  return (
    <div className="edu-item">
      <div className="edu-item-logo">
        <img src={itemData.logo} alt='edu-item logo' />
      </div>
      <div>
        <h2 className="edu-item-title">{itemData.title}</h2>
        <p className="edu-item-subtitle"><FontAwesomeIcon icon={solid("location-dot")}/>  {itemData.location}</p>
        <p className="edu-item-subtitle"><FontAwesomeIcon icon={solid("calendar")}/>  {itemData.time}</p>
        <ul className="edu-item-desc">
          { itemData.description.map(
            (desc) => <li key={desc.id}>{desc.name}</li>
          ) }
        </ul>
        <a className="edu-item-link btn" href={itemData.link} target="_blank" rel="noreferrer">Link <FontAwesomeIcon icon={solid("up-right-from-square")} /> </a>
      </div>
    </div>
  );
}

function Education() {

  const [educationData, setEducationData] = useState([]);

  useEffect( () => {

    fetch('json-api/education.json')
      .then((response) => response.json())
      .then((data) => setEducationData(data.data));

  }, [])

  return (
    <div>
    { educationData.map(
      (item) => <EducationItem key={item.id} itemData={item}/>
    ) }
    </div>
  );
}

export default Education;
