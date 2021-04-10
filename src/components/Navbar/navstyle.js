import styled from "styled-components";

export const Nav = styled.nav`
    background: linear-gradient(90deg, #0096c7, #00b4d8);
    height: 80px;
    margin-top: 0px; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;

    @media screen and (max-width: 960px) {
        transition: 0.5s all ease; 
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.div`
a{
    background: -webkit-linear-gradient(#fff, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin: 8px 0;
    font-size: 40px;
    font-family: 'Lobster', cursive;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    &:hover {
        text-decoration: none;
    } 
}
`;

export const Logo = styled.div`
    height: 30px;
    width: 30px;
    background: linear-gradient(130deg, #55a630, #eeef20);
    border-radius: 90% 0 90% 0%;
    margin: 7px;
`;