import React from "react";
import "./SocialMediaAndContactInfo.scss";
import {socialMediaLinksAndContactInfo} from "../../portfolio";

export default function SocialMediaAndContactInfo() {
  if (!socialMediaLinksAndContactInfo.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinksAndContactInfo.github ? (
        <a
          href={socialMediaLinksAndContactInfo.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.linkedin ? (
        <a
          href={socialMediaLinksAndContactInfo.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.gmail ? (
        <a
          href={`mailto:${socialMediaLinksAndContactInfo.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.gitlab ? (
        <a
          href={socialMediaLinksAndContactInfo.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.facebook ? (
        <a
          href={socialMediaLinksAndContactInfo.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.instagram ? (
        <a
          href={socialMediaLinksAndContactInfo.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.twitter ? (
        <a
          href={socialMediaLinksAndContactInfo.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.medium ? (
        <a
          href={socialMediaLinksAndContactInfo.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.stackoverflow ? (
        <a
          href={socialMediaLinksAndContactInfo.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.kaggle ? (
        <a
          href={socialMediaLinksAndContactInfo.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksAndContactInfo.mobileNumber ? (
        <a
          href={"tel:" + socialMediaLinksAndContactInfo.mobileNumber}
          className="icon-button phone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-phone"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
