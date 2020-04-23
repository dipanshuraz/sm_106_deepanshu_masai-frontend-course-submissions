import React from "react";

function Card1() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div class="card-deck">
            <div class="card border-0">
              <div className="row">
                <div className="col-4">
                  <img
                    src="./ico.png"
                    class="card-img-top"
                    className="img-fluid"
                    clasalt="..."
                  ></img>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Conversations, organised</h5>
                <p class="card-text">
                  Instead of a single overstuffed inbox, conversations in Slack
                  happen in dedicated spaces called channels.
                </p>
              </div>
            </div>
            <div class="card border-0">
              <div className="row">
                <div className="col-4">
                  <img
                    src="./ico1.png"
                    class="card-img-top"
                    className="img-fluid"
                    clasalt="..."
                  ></img>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Stay in the loop, not out</h5>
                <p class="card-text">
                  Slack makes it simple to follow conversations or find
                  important information in an easily searchable archive.
                </p>
              </div>
            </div>
            <div class="card border-0">
              <div className="row">
                <div className="col-4">
                  <img
                    src="./ico2.png"
                    class="card-img-top"
                    className="img-fluid"
                    clasalt="..."
                  ></img>
                </div>
              </div>
              <div class="card-body pb-5">
                <h5 class="card-title">Give focus a chance</h5>
                <p class="card-text">
                  Unlike email, Slack lets you choose which conversations are
                  most important – and which can wait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
