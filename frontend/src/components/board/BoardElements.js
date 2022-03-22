import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3rem;
  margin: 1rem auto 5rem auto;
  
  h4 {
    min-width: 15rem;
    text-align: center;
    background: linear-gradient(25deg, #CFBAF0, #A3C4F3);
    //border-bottom: .3rem solid;
    border: 2px solid;
    border-radius: 1rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 90rem;
    margin-bottom: 7rem;
  }
`