import React from 'react';

const ProjectStatus = (props) => {

    const { status, period, role, type } = props;

    return (
        <section className='status container'>

            <div className='status--card'>
                <p className='name'>
                    Status
                </p>
                <p className='status_t'>
                    {status}
                </p>
            </div>
            <div className='status--card'>
                <p className='name'>
                    Type
                </p>
                <p className='status_t'>
                    {type}
                </p>
            </div>
            <div className='status--card'>
                <p className='name'>
                    Role
                </p>
                <p className='status_t'>
                    {role}
                </p>
            </div>
            <div className='status--card'>
                <p className='name'>
                    Period
                </p>
                <p className='status_t'>
                    {period}
                </p>
            </div>

        </section>
    );
}

export default ProjectStatus;
