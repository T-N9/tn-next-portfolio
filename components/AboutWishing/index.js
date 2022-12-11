import React from "react";

export default function index() {
  return (
    <>
      <section className="about_wishing">
        <div className="container_sm container_y_2">
          <h1 className="about_wishing--title ht_text">
            Merry Christmas and Happy New Year.
          </h1>
          <p className="about_wishing--letter">
            Sending prayers and hearty Christmas greetings to you. May you
            receive the most special of God’s blessings during this amazing
            Christmas season!
          </p>

          <iframe
            className="yt_video"
            src="https://www.youtube.com/embed/7r3VVMUhAxU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="separator"></div>
        </div>
      </section>
    </>
  );
}
