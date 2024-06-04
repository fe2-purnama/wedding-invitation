    /* eslint-disable no-unused-vars */
    import React from 'react';
    import styled from 'styled-components';

    const NavBar = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 128, 128, 1);
    z-index: 1000;
    transition: bottom 0.3s;
    `;

    const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    margin: 0;
    `;

    const NavLinkItem = styled.li`
    margin: 0 15px;
    `;

    const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
    `;

    const NavigationBar = () => {
    return (
        <NavBar>
        <NavLinks>
            <NavLinkItem><NavLink href="#section2">Our Story</NavLink></NavLinkItem>
            <NavLinkItem><NavLink href="#section3">Wedding Date</NavLink></NavLinkItem>
            <NavLinkItem><NavLink href="#section4">Gallery</NavLink></NavLinkItem>
            <NavLinkItem><NavLink href="#section5">Gifts</NavLink></NavLinkItem>
            <NavLinkItem><NavLink href="#section6">RSVP</NavLink></NavLinkItem>
            <NavLinkItem><NavLink href="#section1">Back to top</NavLink></NavLinkItem>
        </NavLinks>
        </NavBar>
    );
    };

    export default NavigationBar;
