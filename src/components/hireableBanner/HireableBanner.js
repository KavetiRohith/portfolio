import React from "react";
import "./HireableBanner.scss";
import {hireableDetails} from "../../portfolio";

const HireableBanner = () => {
  return hireableDetails.isHireable && hireableDetails.message ? (
    <div className="hireable-banner">{hireableDetails.message}</div>
  ) : null;
};

export default HireableBanner;
