import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      className="inputs"
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
