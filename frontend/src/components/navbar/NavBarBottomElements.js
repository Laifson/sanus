import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

export const IconButtonHome = styled.text`
  grid-area: IconButtonHome;
  justify-self: center;
  color: #363636;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  margin-top: -.5rem;
  border-radius: 8px;
`

export const IconButtonHomeName = styled.text`
  grid-area: IconButtonHomeName;
  justify-self: center;
  color: #363636;
  margin-top: -1rem;
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

  &:hover {
    background-color: rgba(0, 0, 0, .12);
    
  }
`

export const IconButtonList = styled.text`
  grid-area: IconButtonList;
  justify-self: center;
  color: #363636;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  margin-top: -.5rem;
`

export const IconButtonListName = styled.text`
  grid-area: IconButtonListName;
  justify-self: center;
  color: #363636;
  margin-top: -1rem;
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
    background-color: rgba(0, 0, 0, .12);
  }
`

export const IconButtonBoard = styled.text`
  grid-area: IconButtonBoard;
  justify-self: center;
  color: #363636;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  margin-top: -.5rem;
`

export const IconButtonBoardName = styled.text`
  grid-area: IconButtonBoardName;
  justify-self: center;
  color: #363636;
  margin-top: -1rem;
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
    background-color: rgba(0, 0, 0, .12);
  }
`

export const IconButtonSearch = styled.text`
  grid-area: IconButtonSearch;
  justify-self: center;
  color: #363636;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  margin-top: -.5rem;
`

export const IconButtonSearchName = styled.text`
  grid-area: IconButtonSearchName;
  justify-self: center;
  color: #363636;
  margin-top: -1rem;
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

  &:hover {
    background-color: rgba(0, 0, 0, .12);

  }
`

export const Nav = styled.div`
  width: 100%;
  display: none;
  position: fixed;
  grid-template-rows: auto;
  grid-template-areas: 
    "IconHome IconList IconBoard IconSearch";
  bottom: 0;
  background: none;
  cursor: pointer;
  transition: all ease .5s;
  
  a.active {
    background-color: rgba(0, 0, 0, .7);
    //
    // ${IconHome},
    // ${IconList},
    // ${IconBoard},
    // ${IconSearch} 
    // {
    //   background-color: rgba(0, 0, 0, .12);
    // }
    
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

  @media screen and (max-width: 991px) {
    display: grid;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

