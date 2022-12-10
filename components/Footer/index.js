import React from "react";
import { Link } from "react-router-dom";

import Greetings from "./Greeting";
import ReachMe from "./ReachMe";

const Footer = () => {
    return (
        <footer className="footer_page_wrapper">
            <div className="footer_page container_sm">
                <div className="footer_flexbox">
                    <Greetings />
                    <ReachMe />
                </div>
                <div className="footer_line">
                    <p>
                        <span className="ht_text">
                        Designed & Implemented by Te Nyain
                        |
                        &copy; 2022
                        |
                        </span>

                        <Link to="/credits">
                            &nbsp; Credits & Attributions
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;