import React from "react";
import styled from "styled-components";

const home = () => {
    return (
        <StyledContainer>
        <h1>Home</h1>
        </StyledContainer>
    )
}

export default home

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`