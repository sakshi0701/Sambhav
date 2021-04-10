import React from 'react';
import {Nav,NavbarContainer,NavLogo, Logo } from "./navstyle.js";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}><a href="/"><Logo /><strong>Sambhav</strong><Logo /></a></NavLogo>       
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

