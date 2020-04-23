import React, { Component } from "react";
import Card from "../components/Card";
import { connect } from "react-redux";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      flag: false
    };
  }
  componentDidMount = () => {
    const { items } = this.props;
    this.setState({ arr: items });
  };

  filterBy = e => {
    let reqCat = e.target.value;
    let newArr = this.state.arr.filter(elem => elem.cat == reqCat);
    this.setState({ arr: newArr });
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

  handlePost = () => {
    let lastIndex = this.state.currentPage * this.state.postPerPage;
    let firstIndex = lastIndex - this.state.postPerPage;
    this.setState({
      currentPosts: this.state.posts.slice(firstIndex, lastIndex)
    });
  };
  pageChange = pageNum => {
    this.setState(
      {
        currentPage: pageNum
      },
      () => this.handlePost()
    );
  };
  changePostsPerPage = e => {
    // console.log(e.target.value);
    this.setState(
      {
        postPerPage: Number(e.target.value)
      },
      () => this.handlePost()
    );
  };

  render() {
    let select = null;
    if (!this.state.loading) {
      select = (
        <select onChange={e => this.changePostsPerPage(e)} name="" id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      );
    }
    return (
      <div className="container-fluid">
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
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active bg-item1"></div>
            <div class="carousel-item bg-item2"></div>
            <div class="carousel-item bg-item3"></div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="row mt-5">
          <div className="container">
            <div className="row">
              <select
                class="form-control"
                name=""
                id=""
                onChange={this.filterBy}
              >
                <option value="">Filter By Category</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="cleaning">Cleaning & Hygiene</option>
                <option value="dairy">Dairy</option>
                <option value="pet">Pet Care</option>
              </select>
              <button
                onClick={this.sortBy}
                className="btn btn-outline-dark m-3"
              >
                Sort By
              </button>
            </div>
            <div className="row justify-content-center m-0 p-0">
              {this.state.arr.map(elem => {
                return (
                  <Card
                    name={elem.name}
                    cat={elem.cat}
                    price={elem.price}
                    unit={elem.unit}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state.adminReducer.items
});

export default connect(mapStateToProps, null)(Home);
