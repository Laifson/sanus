import * as React from 'react';
import {Nav, NavLink, NavMenu, GridMenu, UserInfoButton} from './NavBarTopElements'
import {withTheme} from '../styles/ThemeProvider'
import styled from "styled-components";

function NavBarTop(props) {
    console.log(props)
    const position = props.scrollPosition
    return (
        <Container position>
            <Nav>
                <GridMenu to="/profile">grid_view</GridMenu>
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
                <UserInfoButton to="/profile">person</UserInfoButton>
            </Nav>
        </Container>
    );
}

export default withTheme(NavBarTop);

const Container = withTheme(styled.div`
  background: ${props => props.scrollPosition > 0 ? '#000' : '#000'};
`)