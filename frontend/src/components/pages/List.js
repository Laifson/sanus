import React from "react";
import styled from "styled-components/macro";

const list = () => {
    return (
        <StyledContainer>
            <h1>List</h1>
        </StyledContainer>
    )
}

export default list

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`