import React from 'react';
import "css.gg/icons/css/code-slash.css";
import "css.gg/icons/css/arrow-right-r.css";
import "css.gg/icons/css/code.css";
import "css.gg/icons/css/color-bucket.css";

const ProjectHero = (props) => {

    const { title, mainImage, intro, category, icon } = props;

    return (
        <section className='project_hero'>
            <div className='container_x_sm container_y_2'>
                <div className='project_hero--header'>
                    <div>
                        <h1 className='project_hero--title'>{title}</h1>
                        <p className='project_hero--intro'>
                            {intro}
                        </p>
                    </div>
                    <div>
                        
                        <div className='project_hero--category'>
                            <i className={`gg-${icon}`}></i> 
                            <p>
                                {category}
                            </p>
                            
                        </div>  
                    </div>
                </div>
                <img src={mainImage} alt={`${title} project`} />
            </div>
        </section>
    );
}

export default ProjectHero;
