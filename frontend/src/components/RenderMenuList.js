import React from 'react';
import { Link } from 'react-router-dom';

const RenderMenuList = ({ icons }) => {
  return (
    <>
      <Link to={'/user/properties'} rel="noreferrer" className="list-none">
        {icons && icons[0]} Home
      </Link>
      <Link to={'/explore'} rel="noreferrer" className="list-none">
        {icons && icons[3]} Explore
      </Link>
      <Link to={'/register-property'} rel="noreferrer" className="list-none">
        {icons && icons[2]} Add Property
      </Link>
      <a href="# " rel="noreferrer" className="list-none">
        {icons && icons[1]} About Us
      </a>
    </>
  );
};

export default RenderMenuList;
