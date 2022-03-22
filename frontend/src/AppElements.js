import styled from "styled-components";

export const NavBarBottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ContentDiv = styled.div`
  display: block;
  padding-top: 5rem;
  width: 100%;


  //todo desktop padding

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 70%;
  }
`