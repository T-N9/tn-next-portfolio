import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/NavbarSlice";
import "css.gg/icons/css/sun.css";
import "css.gg/icons/css/moon.css";

const Toggler = () => {

    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.navBar);
    localStorage.setItem('theme', theme);


    return (
        <>
            <button aria-label='toggle nav' onClick={() => dispatch(setTheme())} className='nav_toggler'>
                <title>Change Theme</title>

                <i className={`gg-${theme ? 'moon' : 'sun'}`}></i>
            </button>

            
        </>
    )
}

export default Toggler;