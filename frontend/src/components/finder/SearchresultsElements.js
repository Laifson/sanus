import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-bottom: 8rem;

  @media screen and (min-width: 768px) {

  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid #363636;
  border-right: 2px solid #363636;
  border-bottom: 2px solid #363636;
  border-left: 4px solid #fff;
  background: transparent;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const LabelAndButtonWrapper = styled.div`
  grid-area: LabelAndButtonWrapper;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const ResultLabel = styled.label`
  font-size: 1.2rem;
  color: #363636;
`;

export const Divider = styled.hr`
  grid-area: Divider;
  height: 5px;
  color: rgba(0, 0, 0, 0.65);
  background-color: rgba(0, 0, 0, 0.65);
  margin: .1rem 0 .5rem 0;
  border-radius: 1rem;
`;
