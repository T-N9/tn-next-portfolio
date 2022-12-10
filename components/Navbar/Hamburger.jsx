import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../redux/slices/NavbarSlice';

const Hamburger = () => {

    const { active } = useSelector((state) => state.navBar);
    const dispatch = useDispatch();

    return (
        <>
            <div onClick={() => dispatch(setActive())} className={active ? 'nav_ham hide_on_desktop active'  : 'nav_ham hide_on_desktop'}>
                <span></span>
                <span></span>
            </div>
        </>
    );
}

export default Hamburger;
