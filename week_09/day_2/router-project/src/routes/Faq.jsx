import React, { Component } from "react";

export class Faq extends Component {
  render() {
    return (
      <div className="container grey">
        <div className="row">
          <div className="col-md-12">
            <div class="accordion" id="accordionExample">
              <div class="">
                <div class="" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn "
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit, nesciunt.
                    </button>
                  </h2>
                </div>

                <div className="text-center p-5 d-flex justify-content-center">
                  <div className="">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Adipisci, quis.
                    </p>
                    <p>
                      We carry this message for ourselves and for those who
                      might be on a journey of pain and healing. So Worth
                      Loving, it's a lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <div class="" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn "
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit, nesciunt.
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="text-center p-5 d-flex justify-content-center">
                  <div className="">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates, doloremque?
                    </p>
                    <p>
                      We carry this message for ourselves and for those who
                      might be on a journey of pain and healing. So Worth
                      Loving, it's a lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="" id="headingThree">
            <h2 class="mb-0">
              <button
                class="btn collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                nesciunt.
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="text-center p-5 d-flex justify-content-center">
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, laboriosam!
                </p>
                <p>
                  We carry this message for ourselves and for those who might be
                  on a journey of pain and healing. So Worth Loving, it's a
                  lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
