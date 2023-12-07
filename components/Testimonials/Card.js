import React from "react";
import { useSelector } from "react-redux";

const Card = ({ person }) => {
  const { currentLanguage } = useSelector((state) => state.navBar);

  return (
    <div className="card">
      <div className="saying">
        <p>
          {currentLanguage === "en"
            ? person.english.saying
            : person.japanese.saying}
        </p>
      </div>

      <div className="info">
        <p className="">
          <b className="ht_text">
            {currentLanguage === "en"
              ? person.english.name
              : person.japanese.name}
          </b>{" "}
          |{" "}
          <span className="person_desc">
            {currentLanguage === "en"
              ? person.english.positoin
              : person.japanese.positoin}{" "}
            {person.english.company && (
              <>
                at{" "}
                <a
                  href={person.english.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>
                    {currentLanguage === "en"
                      ? person.english.company
                      : person.japanese.company}
                  </b>
                </a>
              </>
            )}{" "}
            ,{" "}
            {currentLanguage === "en"
              ? person.english.country
              : person.japanese.country}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
