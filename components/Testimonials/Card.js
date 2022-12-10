import React from "react";

const Card = ({ person }) => {
  return (
    <div className="card">
      <div className="saying">
        <p>{person.saying}</p>
      </div>

      <div className="info">
        <p className="">
          <b className="ht_text">{person.name}</b> | {person.position}{" "}
          {person.company && (
            <span>
              at <b>{person.company}</b>
            </span>
          )}{" "}
          , {person.country}
        </p>
      </div>
    </div>
  );
};

export default Card;
