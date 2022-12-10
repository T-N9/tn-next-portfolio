import React from "react";
import "css.gg/icons/css/code-slash.css";
import "css.gg/icons/css/arrow-right-r.css";
import "css.gg/icons/css/code.css";
import "css.gg/icons/css/color-bucket.css";

/* Images */
import Placeholder from '../../assets/placeholder.webp';

/* Component */
import { ImageLoader } from "render-img";

const ProjectCard = (props) => {
    const { title, desc, image, icon, category} = props;
    return (
        <>
            <div className="projectCard">
                <div>
                    <div className="projectCard--header">
                        <div className="category_tag">
                            <i className={`gg-${icon}`}></i>
                            <p>
                                {category}
                            </p>
                        </div>
                    </div>
                    <div className="projectCard--image">
                        <ImageLoader
                        // placeHolderSrc={Placeholder}
                        src={image}
                        errorSrc={Placeholder}
                        alt="portfolio project"
                        width={525} // add Intrinsic width
                        height={339.66} // Intrinsic height
                        threshold={100} // default => 100
                        isUseblur={true} // default => false
                        // backgroundColor="#b4b4b4" // background for overlay
                        />
                        {/* <img src={image} width="525px" height="339.66px" alt="portfolio project"/> */}
                    </div>
                </div>
                <div className="col_2">
                    <div className="projectCard--text">
                        <h1>
                            {title}
                        </h1>
                        <p>
                            {desc}
                        </p>
                    </div>

                    <button className="view_pjBtn">
                        view detail
                        <i className={`gg-arrow-right-r`}></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;