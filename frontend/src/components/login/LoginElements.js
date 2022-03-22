import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 1rem;
  margin: 0 auto 1rem auto;

  @media screen and (min-width: 768px) {
    margin-top: 5rem;
  }
`

export const Form = styled.form`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2);
  border-radius: 1rem;
  padding-bottom: 1rem;

  h5 {
    padding: 1rem;
    text-align: center;
  }

  label {
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    transition: all ease .3s;
    padding-bottom: .5rem;
    
    :hover {
      color: #A3C4F3;
    }
  }

  @media screen and (min-width: 768px) {

  }
`

export const InputWrap = styled.div`
  display: inline-flex;
  align-items: center;
  
  input {
    width: 20rem;
  }
`

export const InputContainer = styled.div`
  display: flex;
  height: 2.5rem;
  align-items: center;
  margin: 0.5rem;

  .input {
    text-align: center;
  }
  
  .input:first-child {
    margin-top: -1rem;
  }
`

export const ButtonWrapper = styled.div`
  height: 2.5rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;

  .button {
    width: 10rem;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
  }
`

export const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  margin: 1rem auto 1rem auto;
  fill: #363636;
  padding-bottom: 1rem;

`

export const FacebookLogo = styled.div`
  cursor: pointer;
  transition: all ease .3s;
  
    :hover {
      fill: #A3C4F3;
    }
  
    :active {
      fill: #fff;
    }
`

export const GoogleLogo = styled.div`
  cursor: pointer;
  transition: all ease .3s;

  :hover {
    fill: #A3C4F3;
  }

  :active {
    fill: #fff;
  }
`

export const GithubLogo = styled.div`
  cursor: pointer;
  transition: all ease .3s;

  :hover {
    fill: #A3C4F3;
  }

  :active {
    fill: #fff;
  }
`

