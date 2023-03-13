import React from "react";

const Title = ({ title, description }) => {
  return (
    <div>
      <h1>
        {/* My name is {props.name} {props.surName} */}
        {title}
      </h1>
      <h1>{description}</h1>
    </div>
  );
};

export default Title;
