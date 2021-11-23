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
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const InputWrap = styled.div`
  display: inline-flex;
  align-items: center;
`

export const FormInput = styled.input`
  border: 2px solid rgba(0, 0, 0, .2);
  border-radius: 4px;
  height: 2rem;
  outline: none;
  font-size: 1.2rem;

  &:hover {
    border: 2px solid rgba(163, 196, 243, .6);
    transition: all ease .2s;
  }

  &:focus {
    border: 2px solid #A3C4F3;
  }
`

export const BarrierCheck = styled.input`
  margin-left: .5rem;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`

export const SelectAndButtonWrapper = styled.div`
  height: 2.5rem;
  margin-bottom: 1rem;


  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

