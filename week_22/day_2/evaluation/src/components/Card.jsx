import React from "react";

function Card(props) {
  return (
    <div className=" col-md-6 col-lg-4 my-3 ">
      <div class="card" style={{ width: "20rem" }}>
        <img
          src="https://via.placeholder.com/200x100"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">Name : {props.name}</p>
          <p class="card-text">
            Price : {props.price} / {props.unit}
          </p>
          <p class="card-text">Category :{props.cat}</p>
        </div>

        <button className="btn btn-success btn-block">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
