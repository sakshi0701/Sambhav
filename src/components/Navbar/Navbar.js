import React from 'react';
import {Nav,NavbarContainer,NavLogo } from "./navstyle.js";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}><a href="/"> Name</a></NavLogo>                 
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

