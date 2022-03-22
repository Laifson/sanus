import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

export const IconButtonHome = styled.text`
  grid-area: IconButtonHome;
  justify-self: center;
  color: #363636;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  margin-top: -.1rem;
  border-radius: 8px;
`

export const IconButtonHomeName = styled.text`
  grid-area: IconButtonHomeName;
  justify-self: center;
  color: #363636;
  font-weight: 600;
`

export const IconHome = styled(Link)`
  grid-area: IconHome;
  display: grid;
  grid-template-areas:
  "IconButtonHome"
  "IconButtonHomeName";
  padding: 0.5rem 0 0.5rem 0;
  text-decoration: none;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;


  &:hover {
    background-color: rgb(89, 89, 89);
    color: #A3C4F3;

    ${IconButtonHome}
    {
      color: #A3C4F3;
    }

    ${IconButtonHomeName}
    {
      color: #A3C4F3;
    }
  }
  
  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`

export const IconButtonList = styled.text`
  grid-area: IconButtonList;
  justify-self: center;
  color: #363636;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  margin-top: -.1rem;
`

export const IconButtonListName = styled.text`
  grid-area: IconButtonListName;
  justify-self: center;
  color: #363636;
  font-weight: 600;
`

export const IconList = styled(Link)`
  grid-area: IconList;
  display: grid;
  grid-template-areas:
  "IconButtonList"
  "IconButtonListName";
  padding: 0.5rem 0 0.5rem 0;
  text-decoration: none;


  &:hover {
    background-color: rgb(89, 89, 89);
    color: #A3C4F3;

    ${IconButtonList}
    {
      color: #A3C4F3;
    }

    ${IconButtonListName}
    {
      color: #A3C4F3;
    }
  }
`

export const IconButtonBoard = styled.text`
  grid-area: IconButtonBoard;
  justify-self: center;
  color: #363636;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  margin-top: -.1rem;
`

export const IconButtonBoardName = styled.text`
  grid-area: IconButtonBoardName;
  justify-self: center;
  color: #363636;
  font-weight: 600;
`

export const IconBoard = styled(Link)`
  grid-area: IconBoard;
  display: grid;
  grid-template-areas:
  "IconButtonBoard"
  "IconButtonBoardName";
  padding: 0.5rem 0 0.5rem 0;
  text-decoration: none;


  &:hover {
    background-color: rgb(89, 89, 89);
    color: #A3C4F3;

    ${IconButtonBoard}
    {
      color: #A3C4F3;
    }

    ${IconButtonBoardName}
    {
      color: #A3C4F3;
    }
  }
`

export const IconButtonSearch = styled.text`
  grid-area: IconButtonSearch;
  justify-self: center;
  color: #363636;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  margin-top: -.1rem;

`

export const IconButtonSearchName = styled.text`
  grid-area: IconButtonSearchName;
  justify-self: center;
  color: #363636;
  font-weight: 600;

`

export const IconSearch = styled(Link)`
  grid-area: IconSearch;
  display: grid;
  grid-template-areas:
  "IconButtonSearch"
  "IconButtonSearchName";
  padding: 0.5rem 0 0.5rem 0;
  text-decoration: none;
  transition: all ease .3s;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;

  &:hover {
    background-color: rgb(89, 89, 89);
    color: #A3C4F3;

    ${IconButtonSearch} 
    {
      color: #A3C4F3;
    }

    ${IconButtonSearchName}
    {
      color: #A3C4F3;
    }
  }
  
  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`

export const Nav = styled.div`
  width: 35rem;
  display: grid;
  position: fixed;
  grid-template-rows: auto;
  grid-template-areas: 
    "IconHome IconList IconBoard IconSearch";
  bottom: 2rem;
  cursor: pointer;
  transition: all ease .5s;
  border-radius: 1rem;
  z-index: 1000;
  
  a {
    background-color: rgb(237, 235, 251);
  }
  
  a.active {
    background-color: rgba(0, 0, 0);
    
    ${IconButtonHome},
    ${IconButtonList},
    ${IconButtonBoard},
    ${IconButtonSearch} 
    {
      color: #A3C4F3;
    }

    ${IconButtonHomeName},
    ${IconButtonListName},
    ${IconButtonBoardName},
    ${IconButtonSearchName}
    {
      color: #A3C4F3;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    background: none;
    display: grid;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0;
  }
`

