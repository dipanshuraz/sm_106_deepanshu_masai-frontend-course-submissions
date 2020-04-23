import React from "react";

const details = props => {
  console.log(props.desc);
  return (
    <div className="text-white px-5 m-2 text-center">
      <h5>{props.name}</h5>
      <h5>{props.location}</h5>
      <p>{props.desc}</p>
    </div>
  );
};

export default details;
