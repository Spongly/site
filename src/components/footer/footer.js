import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// "@fortawesome/free-regular-svg-icons": "^5.15.1",

import {
  faGithub,
  faTwitter,

import './footer.css';


export default function Footer(){
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © {new Date().getFullYear()}. Spongly All rights reserved
        </span>
        <div className="socialinks">
          <span>Follow me</span>
          <a href="https://github.com/spongly" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/sponglyyy" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  )
}
