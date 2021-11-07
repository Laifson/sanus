import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import SanusLogo from "../../img/sanus-logo-wo-text.svg";

export const Nav = styled.nav`
  //background: linear-gradient(25deg,#A3C4F3,#8EECF5);
  background: linear-gradient(25deg,#CFBAF0,#A3C4F3);
  height: 68px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  box-shadow: 0 0 24px -16px #000;
`

export const NavLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 2px;
  height: 2.25rem;
  font-weight: 600;
  color: #363636;
  font-size: 1.2rem;
  border: none;
  border-radius: .75rem;
  background: none;
  text-decoration: none;
  transition: all ease .3s;

  &:hover {
    background-color: rgba(0, 0, 0, .12);
    border-radius: .75rem;
    text-decoration: none;
  }

  &:active {
    background-color: rgba(255,255,255,.75);
    border-radius: .75rem;
    color: #A3C4F3;
  }

  &:focus {
    background-color: rgba(255,255,255,.75);
    border-radius: .75rem;
    color: #A3C4F3;
  }
`

export const NavLogo = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 2px;
  height: 2.25rem;
  font-weight: 600;
  color: #363636;
  font-size: 1.2rem;
  border: none;
  border-radius: .75rem;
  background: none;
  text-decoration: none;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #363636;
  transition: all ease .3s;
  
  &:hover {
    background-color: rgba(0, 0, 0, .12);
  }
  
  &:active {
    background-color: rgba(255,255,255,.75);
    color: #A3C4F3;
  }

  &:focus {
    background-color: rgba(255,255,255,.75);
    color: #A3C4F3;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    margin-right: 100px;
  }
`

export const NavBtnLink = styled(Link)`
  padding: 10px 10px;
  margin: 2px;
  color: #363636;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all ease .3s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  font-style: normal;
  border-radius: .75rem;
  
  &:hover {
    background-color: rgba(0, 0, 0, .12);
    border-radius: .75rem;
    text-decoration: none;
  }

  &:active {
    background-color: rgba(255,255,255,.75);
    border-radius: .75rem;
    color: #A3C4F3;
  }

  &:focus {
    background-color: rgba(255,255,255,.75);
    border-radius: .75rem;
    color: #A3C4F3;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  background-image: url(${SanusLogo});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;