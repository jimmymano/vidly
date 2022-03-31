import React, { Component } from "react";

//input:liked:boolean
//output: onClick
{
  /* Solid Heart */
}
// <i className="fa fa-solid fa-heart"></i>
// Heart Outline
//<i className="fa fa-light fa-heart-o"></i>

const Like = (props) => {
  let classes = "fa fa-solid fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <div>
      <i
        className={classes}
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default Like;
