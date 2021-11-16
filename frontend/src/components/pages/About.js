import React from "react";
import styled from "styled-components/macro";

const about = () => {
    return (
        <StyledContainer>
            <h1>About</h1>
        </StyledContainer>
    )
}

export default about

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`