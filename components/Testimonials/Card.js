import React from "react";

const Card = ({ person }) => {
  return (
    <div className="card">
      <div className="saying">
        <p>{person.saying}</p>
      </div>

      <div className="info">
        <p className="">
          <b className="ht_text">{person.name}</b> | <span className="person_desc">{person.position}{" "}
          {person.company && (
            <>
              at <a href={person.website} target="_blank" rel="noreferrer"><b>{person.company}</b></a>
            </>
          )}{" "}
          , {person.country}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
