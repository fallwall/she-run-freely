import React from 'react';

const ContactSocial = () => {
  return (
    <div className="contact-social">
      <div className="ui horizontal list">
        <div className="item">
          <div className="content">
            <a href="mailto:sherunsfreely@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="mail icon large"></i>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <a href="https://github.com/fallwall" target="_blank" rel="noopener noreferrer">
              <i className="github icon large"></i>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <a href="http://www.instagram.com/fallwall19" target="_blank" rel="noopener noreferrer">
              <i className="instagram icon large"></i>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <a href="https://www.linkedin.com/in/tibbyxu/" target="_blank" rel="noopener noreferrer">
              <i className="linkedin icon large"></i>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <a href="https://www.strava.com/athletes/18133452" target="_blank" rel="noopener noreferrer">
              <i className="strava icon large"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSocial;