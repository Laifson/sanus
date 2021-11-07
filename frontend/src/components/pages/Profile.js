import React from "react";
import styled from "styled-components/macro";

const profile = () => {
    return (
        <StyledContainer>
            <h1>Profil</h1>
        </StyledContainer>
    )
}

export default profile

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`