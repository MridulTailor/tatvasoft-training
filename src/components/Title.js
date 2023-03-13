import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1>
        {/* My name is {props.name} {props.surName} */}
        {props.info.title}
      </h1>
      <h1>{props.info.description}</h1>
    </div>
  );
};

export default Title;
