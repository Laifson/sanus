import styled from "styled-components";

export const Container = styled.div`
  z-index: 0;
  overflow: hidden;
  margin-bottom: 5rem;
`;

export const LabelAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ResultLabel = styled.label`
  font-size: 1rem;
  color: #363636;
  line-height: 4;
  margin-bottom: -4rem;
`

export const AddAllButton = styled.button`
  height: 3rem;
  border: 2px solid rgba(0,0,0,.4);
  padding: 1rem;
  border-radius: 4px;
  color: rgba(0,0,0,.6);
  font-size: 1rem;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: rgba(0,0,0,.1);
    transition: background-color .3s;
  }
`;

export const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  margin: 1rem 0rem 1rem 0rem;
`;
