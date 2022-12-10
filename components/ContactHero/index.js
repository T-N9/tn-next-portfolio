import React from "react";
import { Link } from "react-router-dom";

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
            <h1 className="title_text">Open to work</h1>
            <div className="description">
              <p className="lg_para">
                I am currently seeking job opportunities and experiences to
                build a better version of myself in the web development field. I
                am open to internship, entry-level, and junior-level positions.
                Feel free to contact me and I would love to work with you and
                your team.
              </p>

              {/* <div className='opening_positions'>
                                <p>Opening positions are as follows;</p>
                                <ul className='position_list'>
                                    <li>
                                        Front-end development intern
                                    </li>
                                    <li>
                                        Front-end development trainee
                                    </li>
                                    <li>
                                        Junior front-end developer
                                    </li>
                                    <li>
                                        Junior React developer
                                    </li>
                                    <li>
                                        Junior web designer
                                    </li>
                                    <li>
                                        Junior UI designer
                                    </li>
                                </ul>
                            </div> */}
              <Link to="/services">
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
