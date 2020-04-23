import React from "react";
const button = props => {
  return (
    <div className="col-6">
      {props.data.map(elem => (
        <button
          className="w-25 text-white btn m-2 px-4 py-1"
          style={{ backgroundColor: elem.color }}
        >
          {elem.label}
        </button>
      ))}
    </div>
  );
};
export default button;
