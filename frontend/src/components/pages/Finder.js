import React from "react";
import styled from "styled-components/macro";
import Searchbar from "../finder/Searchbar";
import Searchresults from "../finder/Searchresults";


const finder = () => {
    return (
        <Container>
            <Searchbar/>
            <Searchresults/>
        </Container>
    )
}

export default finder

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5rem 0 0 5rem;
`