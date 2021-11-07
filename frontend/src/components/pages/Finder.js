import React from "react";
import styled from "styled-components/macro";

const finder = () => {
    return (
        <StyledContainer>
            <h1>Finder</h1>
        </StyledContainer>
    )
}

export default finder

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`