import React from "react";

const btnJoinUs = () => {
  return (
    <div className="m-5">
      <div className="row">
        <button type="button" className="round btn btn-primary">
          JOIN US
        </button>
        <button type="button" className=" round btn btn-secondary">
          SETTINGS
        </button>
      </div>
      <div className="row">
        <button type="button" className=" round btn btn-success">
          LOGIN
        </button>
        <button type="button" className="round btn btn-danger">
          DANGER
        </button>
      </div>
      <div className="row">
        <button type="button" className="round btn btn-warning">
          WARNING
        </button>
        <button type="button" className="round btn btn-info">
          INFO
        </button>
      </div>
      <div className="row">
        <button type="button" className="round btn btn-light text-white teal">
          LIGHT
        </button>
        <button type="button" className="round btn btn-dark">
          DARK
        </button>
      </div>
    </div>
  );
};

export default btnJoinUs;
