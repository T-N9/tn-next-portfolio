import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../store/slices/NavbarSlice';

const Hamburger = () => {

    const { active } = useSelector((state) => state.navBar);
    const dispatch = useDispatch();

    return (
        <>
            <div className='nav_ham_wrapper hide_on_desktop'>
                <div onClick={() => dispatch(setActive())} className={active ? 'nav_ham hide_on_desktop active'  : 'nav_ham hide_on_desktop'}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default Hamburger;
