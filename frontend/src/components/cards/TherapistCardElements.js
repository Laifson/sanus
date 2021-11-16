import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 30rem;
  //border: 3px solid #363636;
  background: linear-gradient(25deg,#CFBAF0,#A3C4F3);
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
  box-shadow: 0 0 24px -16px #000;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
`

export const TherapistsName = styled.section`
  color: #363636;
  padding: 0.5em;
  font-size: 1.5em;
`

export const TherapistGender = styled.section`
  color: #363636;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
`

