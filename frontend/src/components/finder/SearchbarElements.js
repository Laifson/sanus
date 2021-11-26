import styled from "styled-components";

export const Form = styled.form`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2);
  border-radius: 1rem;
  
  input {
    width: 17rem;
  }
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const InputWrap = styled.div`
  display: inline-flex;
  align-items: center;
`

export const SelectAndButtonWrapper = styled.div`
  height: 2.5rem;
  margin-bottom: 1rem;


  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

