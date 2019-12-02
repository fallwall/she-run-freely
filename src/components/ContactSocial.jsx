import React from 'react';

const ContactSocial = () => {
  return (
    <div className="contact-social">
      <div className="ui horizontal list">

        <div className="item">
          <i className="mail icon huge"></i>
          <div className="content">
            <a href="mailto:sherunsfreely@gmail.com" target="_blank"></a>
          </div>
        </div>
        <div className="item">
          <i className="github icon huge"></i>
          <div className="content">
            <a href="https://github.com/fallwall" target="_blank"></a>
          </div>
        </div>
        <div className="item">
          <i className="instagram icon huge"></i>
          <div className="content">
            <a href="http://www.instagram.com/fallwall19" target="_blank"></a>
          </div>
        </div>
        <div className="item">
          <i className="linkedin icon huge"></i>
          <div className="content">
            <a href="https://www.linkedin.com/in/tibbyxu/" target="_blank"></a>
          </div>
        </div>
        <div className="item">
          <i className="strava icon huge"></i>
          <div className="content">
            <a href="https://www.strava.com/athletes/18133452" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSocial;