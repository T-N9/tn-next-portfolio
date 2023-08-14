import React from "react";
import Link from "next/link";

const ContactHero = () => {
  return (
    <>
      <section className="contact_hero_wrapper">
        <div className="container_sm contact_hero container_y_2 gradient_bg_transparent">
          <div>
            <h1 style={{ marginBottom: "1rem" }} className="title_text ht_text">
              Tailor the web
            </h1>
            <h1 className="hero_txt">
              I am wishing to work
              <br className="hide_on_mobile" /> and collaborate.
            </h1>
          </div>
        </div>
      </section>
      <section className="container_x_sm open_to_work">
        <div className="container_sm otw_content container_y_2">
          <div className="content">
            <h1 className="title_text outlined_title">Open to work</h1>
            <div className="description">
              <p className="lg_para">
                I am currently on the lookout for exciting job opportunities and
                experiences that will allow me to grow and thrive in the world
                of web development. Whether it&apos;s freelance / part-time web
                design work, or junior-level positions, I am open to them all.
                Feel free to get in touch with me - I would absolutely love the
                chance to work with you and your amazing team!
              </p>

              <Link href="/services">
                <button className="secondary_btn">My Services</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
