import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className="portfolio--header container_sm">
                <h1 className="title_text">
                    Projects
                </h1>

                <Link href='/works'>
                    <button className="header_btn link_hover">
                        view all works &gt;
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Header;
