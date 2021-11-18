import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.div`
  width: 100%;
  height: 5rem;
  display: none;
  position: fixed;
  grid-template-rows: auto;
  grid-template-areas: 
    "IconList IconBoard IconSearch IconInfo";
  bottom: 0;

  @media screen and (max-width: 768px) {
    display: grid;
    left: 0;
    right: 0;
  }
`

export const IconButtonList = styled(Link)`
  grid-area: IconButtonList;
  justify-self: center;
  color: #363636;
  cursor: pointer;
  transition: all ease .2s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2.5rem;
  margin-top: -.5rem;
`

export const IconButtonListName = styled.text`
  grid-area: IconButtonListName;
  justify-self: center;
  color: #363636;
  margin-top: -1rem;
  font-weight: 600;
`

export const IconList = styled.section`
  grid-area: IconList;
  display: grid;
  grid-template-areas:
  "IconButtonList"
  "IconButtonListName";
  cursor: pointer;
  padding: 0.5rem 0 0.5rem 0;
  transition: all ease .2s;

  &:hover {
    background-color: rgba(0, 0, 0, .12);
  }

  &:active {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonList} {
      color: #A3C4F3;
    }

    & ${IconButtonListName} {
      color: #A3C4F3;
    }
  }

  &:focus {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonList} {
      color: #A3C4F3;
    }

    & ${IconButtonListName} {
      color: #A3C4F3;
    }
  }

  &:target {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonList} {
      color: #A3C4F3;
    }

    & ${IconButtonListName} {
      color: #A3C4F3;
    }
  }
`

export const IconButtonBoard = styled(Link)`
  grid-area: IconButtonBoard;
  justify-self: center;
  color: #363636;
  cursor: pointer;
  transition: all ease .2s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2.5rem;
  margin-top: -.5rem;
`

export const IconButtonBoardName = styled.text`
  grid-area: IconButtonBoardName;
  justify-self: center;
  color: #363636;
  margin-top: -1rem;
  font-weight: 600;
`

export const IconBoard = styled.section`
  grid-area: IconBoard;
  display: grid;
  grid-template-areas:
  "IconButtonBoard"
  "IconButtonBoardName";
  cursor: pointer;
  transition: all ease .2s;
  padding: 0.5rem 0 0.5rem 0;

  &:hover {
    background-color: rgba(0, 0, 0, .12);
  }

  &:active {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonBoard} {
      color: #A3C4F3;
    }

    & ${IconButtonBoardName} {
      color: #A3C4F3;
    }
  }

  &:focus {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonBoard} {
      color: #A3C4F3;
    }

    & ${IconButtonBoardName} {
      color: #A3C4F3;
    }
  }

  &:target {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonBoard} {
      color: #A3C4F3;
    }

    & ${IconButtonBoardName} {
      color: #A3C4F3;
    }
  }
`

export const IconButtonSearch = styled(Link)`
  grid-area: IconButtonSearch;
  justify-self: center;
  color: #363636;
  cursor: pointer;
  transition: all ease .2s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2.5rem;
  margin-top: -.5rem;
`

export const IconButtonSearchName = styled.text`
  grid-area: IconButtonSearchName;
  justify-self: center;
  color: #363636;
  margin-top: -1rem;
  font-weight: 600;
`

export const IconButtonInfo = styled(Link)`
  grid-area: IconButtonInfo;
  justify-self: center;
  color: #363636;
  cursor: pointer;
  transition: all ease .2s;
  text-decoration: none;
  font-family: Material Icons Round, sans-serif;
  font-size: 2.5rem;
  margin-top: -.5rem;

`

export const IconSearch = styled.section`
  grid-area: IconSearch;
  display: grid;
  grid-template-areas:
  "IconButtonSearch"
  "IconButtonSearchName";
  cursor: pointer;
  transition: all ease .2s;
  padding: 0.5rem 0 0.5rem 0;

  &:hover {
    background-color: rgba(0, 0, 0, .12);
  }

  &:active {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonSearch} {
      color: #A3C4F3;
    }

    & ${IconButtonSearchName} {
      color: #A3C4F3;
    }
  }

  &:focus {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonSearch} {
      color: #A3C4F3;
    }

    & ${IconButtonSearchName} {
      color: #A3C4F3;
    }
  }

  &:target {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonSearch} {
      color: #A3C4F3;
    }

    & ${IconButtonSearchName} {
      color: #A3C4F3;
    }
  }
`

export const IconButtonInfoName = styled.text`
  grid-area: IconButtonInfoName;
  justify-self: center;
  color: #363636;
  margin-top: -1rem;
  font-weight: 600;
`

export const IconInfo = styled.section`
  grid-area: IconInfo;
  display: grid;
  grid-template-areas:
  "IconButtonInfo"
  "IconButtonInfoName";
  cursor: pointer;
  transition: all ease .2s;
  padding: 0.5rem 0 0.5rem 0;

  &:hover {
    background-color: rgba(0, 0, 0, .12);
  }

  &:active {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonInfo} {
      color: #A3C4F3;
    }

    & ${IconButtonInfoName} {
      color: #A3C4F3;
    }
  }

  &:focus {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonInfo} {
      color: #A3C4F3;
    }

    & ${IconButtonInfoName} {
      color: #A3C4F3;
    }
  }

  &:target {
    background-color: rgba(255, 255, 255, .75);

    ${IconButtonInfo} {
      color: #A3C4F3;
    }

    & ${IconButtonInfoName} {
      color: #A3C4F3;
    }
  }
`

