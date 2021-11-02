import React from 'react';
import headerimg from '../../assets/img/header_img.png';
import MapCard from './MapCard';
import ProjectLink from './ProjectLink';

const MobileV = () => {
  return (
    <div className="mobileV">
      <img className="header img" src={headerimg} alt="header" />
      <div className="in-mobilev">
        <MapCard />
        <ProjectLink />
      </div>
    </div>
  );
};

export default MobileV;
