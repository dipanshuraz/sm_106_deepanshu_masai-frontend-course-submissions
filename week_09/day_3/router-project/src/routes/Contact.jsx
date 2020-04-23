import React from "react";
import ContactImgBg from "../assets/img/img-01.png";

function Contact() {
  return (
    <>
      <div className="container-fluid">
        <p className="display-4 text-center p-5">Contact Us</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={ContactImgBg} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="nameInput"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="subjectInput"
                    aria-describedby="emailHelp"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="details"
                    class="form-control "
                    id="detailsInput"
                    aria-describedby="emailHelp"
                    placeholder="Message"
                  />
                </div>
                <button type="button" className="btn btn-outline-dark">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
