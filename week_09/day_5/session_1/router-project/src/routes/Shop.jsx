import React, { Component } from "react";
import "./Shop.modules.css";
import ShopCard from "../components/common/ShopCard";

export class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      flag: false
    };
  }
  componentDidMount = () => {
    this.setState({
      arr: [...this.props.data]
    });
  };

  sortBy = () => {
    console.log(this.state.arr);
    if (this.state.flag) {
      this.state.arr.sort((a, b) => b.price - a.price);
      this.setState(pre => ({
        flag: !pre.flag
      }));
    } else {
      this.state.arr.sort((a, b) => a.price - b.price);
      this.setState(pre => ({
        flag: !pre.flag
      }));
    }
  };

  render() {
    // console.log(this.props.isAuth);
    let array = [];
    if (this.state.arr.length > 0) {
      array = this.state.arr;
    } else {
      array = this.props.data;
    }
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
                      Originals
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="text-center p-5 d-flex justify-content-center">
                    <div className="">
                      <h1>The Original Collection</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore ipsa accusantium porro dolorem
                        praesentium fugit ex quasi atque provident nobis
                        asperiores aliquam, earum amet, delectus neque dicta
                        nostrum? Necessitatibus accusantium perspiciatis
                        deserunt! Consectetur non exercitationem possimus odit
                        iusto, ipsum neque, culpa sint corrupti in tempore
                        ducimus cupiditate tempora sunt expedita!
                      </p>
                      <button
                        onClick={this.sortBy}
                        className="btn btn-outline-danger"
                      >
                        Asc/Des
                      </button>
                    </div>
                  </div>
                  <div className="row p-3">
                    {array.map(elem => (
                      <ShopCard
                        isAuth={this.props.isAuth}
                        img={elem.thumbnailUrl}
                        id={elem.id}
                        title={elem.title}
                        price={elem.price}
                      />
                    ))}
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
                      Made Collection
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
                      <h1>The MADE Collection</h1>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Magnam explicabo sed amet eos ipsa animi
                        necessitatibus labore, ducimus distinctio quasi
                        suscipit, tempore cumque adipisci odio natus. Placeat
                        amet inventore provident non libero porro deserunt
                        debitis iure ipsam, fuga pariatur quam ad laudantium
                        quis molestias fugiat in nemo sunt nisi animi?
                      </p>
                    </div>
                  </div>
                  <div className="row p-3">
                    <ShopCard />
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
                      Other
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
                      <h1>Home & Accessories</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sit corporis voluptatem quia dolore pariatur
                        voluptatum repellat labore mollitia error molestias
                        impedit quaerat iste, ab facere quisquam. Autem,
                        veritatis. Libero, est? Similique iste excepturi tenetur
                        non voluptatibus repellat, commodi sint eos molestias
                        molestiae quod blanditiis. Labore iure aliquam animi
                        sapiente optio.
                      </p>
                    </div>
                  </div>
                  <div className="row p-3">
                    <ShopCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
