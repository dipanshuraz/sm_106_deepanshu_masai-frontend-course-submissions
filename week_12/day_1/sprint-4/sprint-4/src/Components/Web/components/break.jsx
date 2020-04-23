import React from "react";

function break1() {
  return (
    <div>
      <div className="container text-center">
        <h1 className="dark-title-2 mt-5 pt-5">Break out of the inbox</h1>
        <p className="px-2 dark">
          Working in channels gives everyone in your team a shared view of
          progress and purpose.
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="center m-auto">
            <div className="video-card col-6">
              <video
                width="840"
                height="640"
                playsinline="playsinline"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source
                  src="https://slack.com/marketing/img/homepage/video/brand-campaign_inline-video.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default break1;
