import React, { Component } from "react";
import myImg from "../assets/img/img.jpeg";

export class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>About Us</h1>
            <p className="p-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
              exercitationem eum vel? Eveniet vitae ex facilis eos dolore sed
              cupiditate est tempore ab deserunt hic laborum unde, omnis
              incidunt sequi! Vitae molestiae ea id expedita fugit sit ut et
              aspernatur!
            </p>
            <div className="row">
              <div className="col-md d-flex flex-column align-items-center p-2 pb-5">
                <img
                  src={myImg}
                  height="200px"
                  width="200px"
                  className="rounded-circle p-1 border shadow-lg"
                  alt=""
                />
                <h1 className="p-3">Deepanshu prajapati</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
