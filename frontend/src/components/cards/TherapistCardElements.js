import styled from "styled-components";

export const Container = styled.div`
  grid-template-columns: 5rem 2rem 5rem;
  grid-template-rows: 4rem auto 4rem;
  column-gap: 2rem;
  row-gap: 2rem;
  border: 2px solid #363636;
  background: linear-gradient(25deg,#CFBAF0,#A3C4F3);
  border-radius: 12px;
  box-shadow: 0 0 24px -16px #000;
`

export const CardHeader = styled.div`
  display: grid;
  
`

export const Divider = styled.hr`
  border: 2px solid #363636;
  border-radius: 5px;
`;

export const TherapistsName = styled.section`
  color: #363636;
  padding: 0.5em;
  font-size: 1.5em;
  grid-row: 1;
`

export const TherapistGender = styled.section`
  color: #363636;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
  padding-top: 0.5rem;
  grid-row: 1;
  
`

