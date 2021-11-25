import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3rem;


  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    margin-top: 5rem;
  }
`

export const SubContainer = styled.div`
  font-size: 1rem;
  padding-top: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 2rem;
  width: 22rem;
  height: 22rem;
  //border: 2px solid #363636;
  border-radius: 3rem;
  background-color: rgba(0,0,0,.1);
  
  button {
    border: none !important;
  }

  .button {
    justify-content: center;

    :first-of-type {
      border-top-left-radius: 3rem;
    }
    
    :nth-child(2) {
      border-top-right-radius: 3rem;
    }

    :nth-child(3) {
      border-bottom-left-radius: 3rem;
    }

    :nth-child(4) {
      border-bottom-right-radius: 3rem;
    }
    
    :hover {
      background-color: rgba(0, 0, 0, .3);
      color: #A3C4F3;
    }
    
    :active {
      background-color: rgba(255, 255, 255, .2);
    }
    
  }
  
  @media screen and (min-width: 768px) {
    font-size: 2rem;
    margin-top: 5rem;
    width: 28rem;
    height: 28rem;
  }
`

export const InsideButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Icon = styled.text`
  font-size: 2.5rem;
  font-family: 'Material Icons round';
`

export const Label = styled.span`
  
`



