import React from "react";
import styled from "styled-components/macro";

const board = () => {
    return (
        <StyledContainer>
            <h1>Board</h1>
        </StyledContainer>
    )
}

export default board

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`