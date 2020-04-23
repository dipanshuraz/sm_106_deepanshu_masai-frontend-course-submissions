import React from "react";
const skills = props => {
  return (
    <div className="container p-4 skill-bg text-white">
      <p>Skills</p>
      <div className="row">
        {props.skills.map(elem => {
          return <span className="px-2 skill">{elem}</span>;
        })}
      </div>
    </div>
  );
};
export default skills;
