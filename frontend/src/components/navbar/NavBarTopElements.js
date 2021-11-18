import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
  display: grid;
  position: fixed;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "gridnav textnav accountnav";
  margin: 1rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 768px) {
    left: 1rem;
    right: 1rem;
  }
`

export const NavLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
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

export const NavMenu = styled.div`
  grid-area: textnav;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const GridMenu = styled(Link)`
  grid-area: gridnav;
  justify-self: start;
  color: #363636;
  cursor: pointer;
  transition: all ease .2s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 3rem;
  
  &:hover {
    color: #F49B76;
    transform: rotate(45deg);
  }

  &:active {
    color: #F49B76;
    transform: rotate(45deg);
  }

  &:focus {
    color: #F49B76;
    transform: rotate(45deg);
  }

  &:target {
    color: #F49B76;
    transform: rotate(45deg);
  }
`

export const UserInfoButton = styled(Link)`
  grid-area: accountnav;
  justify-self: end;
  color: #363636;
  cursor: pointer;
  transition: all ease .2s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 3rem;
  
  &:hover {
    color: #F49B76;
  }

  &:active {
    color: #F49B76;
  }

  &:focus {
    color: #F49B76;
  }

  &:target {
    color: #F49B76;
  }
`