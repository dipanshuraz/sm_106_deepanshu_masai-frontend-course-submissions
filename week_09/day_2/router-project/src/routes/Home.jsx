import React, { Component } from "react";
import video from "../assets/video/video.mp4";
import "./Home.modules.css";
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: video
    };
  }

  render() {
    return (
      <>
        <div className="container-fluid h-100">
          <div className="row">
            <div
              id="carousel-example-1z"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carousel-example-1z"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <div className="bg-home-1"></div>
                </div>

                <div class="carousel-item">
                  <div className="bg-home-2"></div>
                </div>

                <div class="carousel-item">
                  <div className="bg-home-3"></div>
                </div>
              </div>

              <a
                class="carousel-control-prev"
                href="#carousel-example-1z"
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
                href="#carousel-example-1z"
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
          </div>

          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-self-center">
              <div className="center p-5">
                <div className="line-dark my-2"></div>
                <h3>you are so worth loving.</h3>
                <p>
                  No matter your past mistakes, relationship <br /> status,
                  career choice, or the history that <br /> you came from, you
                  are so worth loving.
                </p>
                <button className="btn btn-outline-info">Check More</button>
              </div>
            </div>
            <div className="col-md-6 bg-img-1"></div>
          </div>

          <div className="row">
            <div className="col-md-6 bg-img-2"></div>
            <div className="col-md-6 d-flex justify-content-center align-self-center">
              <div className="center p-5">
                <div className="line-dark my-2 "></div>
                <h3>you are so worth loving.</h3>
                <p>
                  Learning about ourselves can be scary but so necessary for us
                  to learn how to love others. Listening, reading, and learning
                  can bring a level of healing, rather than filling voids and
                  allowing parts of ourselves to become dormant. We have done
                  the homework of what to feed your soul. We have shared safe
                  podcasts & books as well as stories from the the community
                  that will lead to healing and a thriving life.
                </p>
                <button className="btn btn-outline-info">Check More</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <video id="background-video" loop autoPlay>
                <source src={this.state.video} type="video/mp4" />
                <source src={this.state.video} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-md-12 p-5 d-flex justify-content-center ">
              <h6>
                No matter your past mistakes, relationship status, career
                choice, or the history that you came from, you are so worth
                loving.
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 bg-img-3 d-flex justify-content-center "></div>
            <div className="col-md-6 bg-img-4"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
