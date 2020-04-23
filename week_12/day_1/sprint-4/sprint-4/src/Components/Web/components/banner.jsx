import React from "react";

function banner() {
  return (
    <div>
      <div className="container-fluid poster ">
        <div className="row ">
          <div className="col-md-6 p-5 m-4">
            <h1 className="dark-title">
              {" "}
              Slack replaces email inside your company
            </h1>
            <h5>
              Keep conversations organised in Slack, the smart <br />
              alternative to email.
            </h5>
            <button
              type="button"
              class="btn btn-primary workspace-color p-3 m-2"
            >
              Your workspaces
            </button>
            <button
              type="button"
              class="btn btn-outline-dark workspace-light  p-3 m-2"
            >
              Your workspaces
            </button>
            <p>
              {" "}
              <small>
                Already using Slack? <span className="blueColor">Sign in.</span>
              </small>
            </p>
          </div>
          <div className="col-md-6 "></div>
        </div>
      </div>
    </div>
  );
}

export default banner;
