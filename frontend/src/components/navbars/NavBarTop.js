import * as React from 'react';
import {Container, GridMenu, UserInfoButton, SanusLogo, SanusLogoHide} from './NavBarTopElements'
import {withTheme} from '../styles/ThemeProvider'

function NavBarTop(props) {

    const position = props.scrollPosition
    const showLogo = position <= 0 ? <SanusLogo/> : <SanusLogoHide/>;



    return (
            <Container>
                <GridMenu to="/profile">grid_view</GridMenu>
                {showLogo}
                <UserInfoButton to="/profile">person</UserInfoButton>
            </Container>
    );
}

export default withTheme(NavBarTop);
