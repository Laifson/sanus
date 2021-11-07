import * as React from 'react';
import {Nav, NavLink, NavLogo, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements'
import HeaderLogo from '../../img/sanus-logo-wo-text.svg'
import styled from "styled-components";

export default function Navbar() {
    return (
        <>
        <Nav>
            <NavLogo to="/">
                <HeaderLogoS src={HeaderLogo} alt="logo"/>
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    Infos
                </NavLink>
                <NavLink to="/finder" activeStyle>
                    Suchen
                </NavLink>
                <NavLink to="/list" activeStyle>
                    Übersicht
                </NavLink>
                <NavLink to="/board" activeStyle>
                    Board
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/">dark_mode</NavBtnLink>
                <NavBtnLink to="/profile">account_circle</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
}

const HeaderLogoS = styled.img`
  width: 50px;
  justify-content: center;
  padding-top: 10px;
`