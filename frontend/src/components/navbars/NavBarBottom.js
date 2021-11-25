import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Nav,
    IconList,
    IconBoard,
    IconSearch,
    IconHome,
    IconButtonHome,
    IconButtonList,
    IconButtonBoard,
    IconButtonSearch,
    IconButtonHomeName,
    IconButtonListName,
    IconButtonBoardName,
    IconButtonSearchName,
} from './NavBarBottomElements'

export default function NavBarBottom() {
    return (

        <Nav>
            <IconHome to="/">
                <IconButtonHome>home</IconButtonHome>
                <IconButtonHomeName>Home</IconButtonHomeName>
            </IconHome>
            <IconList to="/list">
            <IconButtonList>inventory</IconButtonList>
            <IconButtonListName>Übersicht</IconButtonListName>
            </IconList>
            <IconBoard to="/board">
            <IconButtonBoard>view_kanban</IconButtonBoard>
            <IconButtonBoardName>Board</IconButtonBoardName>
            </IconBoard>
            <IconSearch to="/finder">
            <IconButtonSearch>person_search</IconButtonSearch>
            <IconButtonSearchName>Finder</IconButtonSearchName>
            </IconSearch>
        </Nav>
    );

}
