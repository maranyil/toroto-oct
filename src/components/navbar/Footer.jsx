import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/png/logo.png';
import fb from '../../assets/png/facebook_icon.png';
import lnkin from '../../assets/png/linkedin_icon.png';
import insta from '../../assets/png/instagram_icon.png';
import twit from '../../assets/png/twitter_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="nav-options">
        <li className="navf-item">
          <a href="https://www.facebook.com/holatoroto">
            <img src={fb} alt="facebook link"/>
          </a>
        </li>
        <li className="navf-item">
          <a href="https://www.linkedin.com/company/toroto/">
              <img src={lnkin} alt="linkedIn link"/>
          </a>
        </li>
        <li className="navf-item">
          <a href="https://www.instagram.com/holatoroto/">
              <img src={insta} alt="instagram link"/>
          </a>
        </li>
        <li className="navf-item">
          <a href="https://twitter.com/holatoroto">
              <img src={twit} alt="twitter link"/>
          </a>
        </li>
      </ul>
      <Link
        to="top"
        smooth={true}
        className="logo"
      >
        <img src={logo} alt="main Toroto logo" />
      </Link>
    </div>
  );
};

export default Footer;
