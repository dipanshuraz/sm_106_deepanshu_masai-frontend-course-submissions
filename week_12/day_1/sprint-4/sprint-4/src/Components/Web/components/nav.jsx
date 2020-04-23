import React from "react";

function nav() {
  return (
    <div>
      <div className="container-fluid">
        <nav className="container navbar navbar-expand-lg navbar-light ">
          <div className="col-10">
            <a className="py-2 px-3" href="#">
              <img
                src="./logo.png"
                alt=""
                className="img-fluid"
                width="120px"
              />
            </a>
            <a className="py-2 px-3" href="#">
              Why Slack?
            </a>
            <a className="py-2 px-3" href="#">
              Solutions
            </a>
            <a className="py-2 px-3" href="#">
              Resources
            </a>
            <a className="py-2 px-3" href="#">
              Enterprise
            </a>
            <a className="py-2 px-3" href="#">
              Pricing
            </a>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-primary workspace-color p-2">
              Your workspaces
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default nav;
