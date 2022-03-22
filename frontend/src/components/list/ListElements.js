import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 7rem;
`

export const TopBar = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2);
  border-radius: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const InputWrap = styled.div`
  display: inline-flex;
  align-items: center;
  
  input {
    width: 17rem;
  }
`

export const LabelAndButtonWrapper = styled.div`
  height: 2.5rem;
  margin-bottom: 1rem;


  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  align-items: center;
  
  @media screen and (max-width: 768px) {

  }
`