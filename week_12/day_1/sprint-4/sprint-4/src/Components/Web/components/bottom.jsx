import React from "react";

function bottom() {
  return (
    <div>
      <div className="container text-center">
        <h1 className="dark-title-2">What’s new at Slack</h1>
        <div className="row m-5">
          <div className="col-4 px-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg"
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <p class="card-text">
                  Blog Not all Daily Active Users are created equal: Work is
                  fueled by true engagement
                </p>
                <p>READ STORY</p>
              </div>
            </div>
          </div>
          <div className="col-4 px-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png"
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <p class="card-text">
                  Blog Shared channels: A better way to work with people outside
                  your company
                </p>
                <p> READ STORY</p>
              </div>
            </div>
          </div>
          <div className="col-4 px-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png"
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <p class="card-text">
                  Blog Slack and G Suite bring productivity to your everyday
                  work
                </p>
                <p>LEARN MORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center p-5 bg-purple">
        <div className="container pb-5">
          <h1 className="light-title-2 p-5">Choose a better way to work</h1>
          <button type="button" class="btn btn-primary light-btn p-3 m-2">
            Your workspaces
          </button>
          <button
            type="button"
            class="btn btn-primary light-outline-btn p-3 m-2"
          >
            Your workspaces
          </button>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-4">
            <img
              src="./btm-logo.png"
              className="img-fluid"
              width="50px"
              alt=""
            />
          </div>
          <div className="col-8">
            <table>
              <tr>
                <th>PRODUCTS</th>
                <th>SLACK FOR TEAMS</th>
                <th>RESOURCES</th>
                <th>COMPANY</th>
              </tr>
              <tr>
                <td>Why Slack?</td>
                <td>Engineering</td>
                <td>Slack Tips</td>
                <td>About us</td>
              </tr>
              <tr>
                <td>Enterprise</td>
                <td>Financial services</td>
                <td>Blog</td>
                <td>Leadership</td>
              </tr>
              <tr>
                <td>Security</td>
                <td>Sales</td>
                <td>Slack Certified programme</td>
                <td>News</td>
              </tr>
              <tr>
                <td>Customer stories</td>
                <td>IT</td>
                <td>Help Centre</td>
                <td>Media kit</td>
              </tr>
              <tr>
                <td>Pricing</td>
                <td>Marketing</td>
                <td>API</td>
                <td>Careers</td>
              </tr>
              <tr>
                <td>Slack demo</td>
                <td>Customer support</td>
                <td>App Directory</td>
              </tr>
              <tr>
                <td>Human resources</td>
                <td>Download Slack</td>
              </tr>
              <tr>
                <td>Project management</td>
                <td>Partners</td>
              </tr>
              <tr>
                <td>Media</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <a className="p-2" href="">
                Status
              </a>
              <a className="p-2" href="">
                Privacy & terms
              </a>
              <a className="p-2" href="">
                Contact us
              </a>
              <a className="p-2" href="">
                Change region
              </a>
              ©
            </div>
            <div className="col-md-4 text-right">
              <a href="">
                <i class="fab fa-linkedin p-2"></i>
              </a>
              <a href="">
                <i class="fab fa-twitter p-2"></i>
              </a>
              <a href="">
                <i class="fab fa-facebook-square p-2"></i>
              </a>
              <a href="">
                <i class="fab fa-youtube p-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default bottom;
