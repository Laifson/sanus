import * as React from 'react';
import {
    Nav,
    IconList,
    IconBoard,
    IconSearch,
    IconInfo,
    IconButtonList,
    IconButtonBoard,
    IconButtonSearch,
    IconButtonInfo,
    IconButtonListName,
    IconButtonBoardName,
    IconButtonSearchName,
    IconButtonInfoName,
} from './NavBarBottomElements'

export default function NavBarBottom() {
    return (
        <Nav>
            <IconList>
            <IconButtonList to="/overview">inventory</IconButtonList>
            <IconButtonListName>Übersicht</IconButtonListName>
            </IconList>
            <IconBoard>
            <IconButtonBoard to="/board">view_kanban</IconButtonBoard>
            <IconButtonBoardName>Board</IconButtonBoardName>
            </IconBoard>
            <IconSearch>
            <IconButtonSearch to="/finder">person_search</IconButtonSearch>
            <IconButtonSearchName>Suche</IconButtonSearchName>
            </IconSearch>
            <IconInfo>
            <IconButtonInfo to="/info">emoji_objects</IconButtonInfo>
            <IconButtonInfoName>Info</IconButtonInfoName>
            </IconInfo>
        </Nav>
    );

}
