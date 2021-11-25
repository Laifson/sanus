import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import Logo from '../../components/styles/assets/sanus-logo3.svg'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 3rem;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  left: 0.1rem;
  right: 0.1rem;

  @media screen and (min-width: 768px) {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 70%;
  }
`

export const SanusLogo = styled.svg`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  justify-self: center;
  width: 150px;
  margin-top: .5rem;
  pointer-events: none;
`

export const SanusLogoHide = styled.svg`
  background-image: none;
  background-repeat: no-repeat;
  justify-self: center;
  width: 100px;
  margin-top: .5rem;
`

export const GridMenu = styled(Link)`
  flex-grow: 1;
  color: #363636;
  cursor: pointer;
  transition: all ease .3s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2.5rem;
  justify-self: start;
  align-self: center;
  margin-left: .5rem;
  
  &:hover {
    color: #fff;
    transform: rotate(45deg);
  }

  &:active {
    color: #fff;
    transform: rotate(45deg);
    transform-origin:center center;
  }

  &:focus {
    color: #fff;
    transform: rotate(45deg);
  }

  &:target {
    color: #fff;
    transform: rotate(45deg);
  }

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`

export const UserInfoButton = styled(Link)`
  flex-grow: 1;
  color: #363636;
  cursor: pointer;
  transition: all ease .2s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2.5rem;
  align-self: center;
  justify-self: end;
  margin-right: .5rem;
  
  &:hover {
    color: #fff;
  }

  &:active {
    color: #fff;
  }

  &:focus {
    color: #fff;
  }

  &:target {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`