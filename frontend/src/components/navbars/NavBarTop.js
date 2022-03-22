import * as React from 'react';
import {Container, GridMenu, SanusLogo, SanusLogoHide, UserInfoButton} from './NavBarTopElements'
import {withTheme} from '../styles/ThemeProvider'
import {useNavigate} from "react-router-dom";

function NavBarTop({ scrollPosition, setCredentials, initialState }) {
    const navigate = useNavigate()
    const showLogo = scrollPosition <= 0 ? <SanusLogo/> : <SanusLogoHide/>;

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login')
    };

    return (
            <Container>
                <GridMenu to="/kanban">grid_view</GridMenu>
                {showLogo}
                <UserInfoButton onClick={handleLogout}>exit_to_app</UserInfoButton>
            </Container>
    );
}

export default withTheme(NavBarTop);
