import React from "react";

function corosel() {
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 p-5">
            <h1 className="dark-title-2">Make the change to channels</h1>
            <p className="lead">
              Productive teamwork happens in channels – organised spaces for
              everything related to a project, topic or team.
            </p>
            <p className="blueColor">Learn more about channels --></p>
          </div>
          <div className="col-md-6">
            <div className="video-card ">
              <video
                width="100%"
                height="100%"
                playsinline="playsinline"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src="https://a.slack-edge.com/085e3/marketing/img/channels/vid/channels-inline1.en-IN.mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <div className="video-card ">
              <video
                width="100%"
                height="100%"
                playsinline="playsinline"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src="https://a.slack-edge.com/085e3/marketing/img/shared-channels/vid/shared-channels-inline3.en-IN.mp4"></source>
              </video>
            </div>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="dark-title-2">
              Shared channels bring companies together
            </h1>
            <p className="lead">
              Now channels can help you work as closely with external partners
              and clients as you do with teams down the corridor.
            </p>
            <p className="blueColor">See how with shared channels --></p>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center bg-light">
        <div className="container">
          <h1 className="dark-title-2">Trusted the world over</h1>
          <p className="lead">
            Teams of every size, shape and sort have already made Slack the
            place where their work happens.
          </p>
          <p className="colorBlue">See all customer stories ---></p>
        </div>
        <div className="container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="col-4">
                  <img
                    class="d-block w-100"
                    src="https://a.slack-edge.com/80588/marketing/img/stories/shopify/slack-customer-shopify.jpg"
                    alt="First slide"
                  ></img>
                  <div className="col-8"></div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="col-4">
                  <img
                    class="d-block w-100"
                    src="https://a.slack-edge.com/80588/marketing/img/stories/intuit/slack-customer-intuit.jpg"
                    alt="Second slide"
                  ></img>
                </div>
                <div className="col-8"></div>
              </div>
              <div class="carousel-item">
                <div className="col-4">
                  <img
                    class="d-block w-100"
                    src="https://a.slack-edge.com/80588/marketing/img/stories/everlane/slack-customer-everlane.jpg"
                    alt="Third slide"
                  ></img>
                </div>
                <div className="col-8 bg-white"></div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div className="container">
            <div className="row m-5 py-5">
              <div className="col-md-3">
                <img
                  src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/trivago-logo.png"
                  alt=""
                />
              </div>
              <div className="col-md-3">
                <img
                  src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/vodafone-logo.png"
                  alt=""
                />
              </div>
              <div className="col-md-3">
                <img
                  src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/shopify-logo.png"
                  alt=""
                />
              </div>
              <div className="col-md-3">
                <img
                  src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/treebo-logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default corosel;
