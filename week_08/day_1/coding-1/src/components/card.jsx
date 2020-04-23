import React from "react";
import ProTag from "./card/proTag";
import CircelImage from "./card/circleImage";
import Details from "./card/details";
import Btn from "./card/btnOutline";
import Skills from "./card/skills";

const card = () => {
  return (
    <div className="container-fluid bg-card-light">
      <div className="container d-flex justify-content-center p-5">
        <div className="user-card ">
          <div className="card bg-card px-5 py-4 ">
            <div className="row">
              <ProTag />
              <CircelImage />
            </div>
            <div className="row">
              <Details />
            </div>
            <div className="row">
              <Btn />
            </div>
          </div>
          <div className="bg-card skill-bg">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
