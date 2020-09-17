import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p>Key: {props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <Details detailInfo={props.phone} />
          <Details detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
