import React from "react";

const mobile = props => {
  return (
    <div>
      <h1>{props.heading}</h1>
      <ul>
        {props.name.map(elem => (
          <li>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default mobile;
