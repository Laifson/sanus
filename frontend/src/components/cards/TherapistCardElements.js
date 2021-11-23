import styled from "styled-components";

export const Container = styled.div`
  grid-template-columns: 5rem 2rem 5rem;
  grid-template-rows: 4rem auto 4rem;
  column-gap: 2rem;
  row-gap: 2rem;
  background: #363636;
  border-radius: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
`

export const CardHeader = styled.div`
  display: grid;
`

export const Divider = styled.hr`
  border: 2px solid #fff;
  border-radius: 5px;
`;

export const CardExpander = styled.section`
  color: #fff;
  font-family: Material Icons Round, sans-serif;
  font-size: 2rem;
`

export const TherapistsName = styled.section`
  color: #fff;
  padding: 0.5em;
  font-size: 1.4em;
  grid-row: 1;
`

export const CardBody = styled.div`
  display: grid;
  font-size: 1.2em;
  color: #fff;
`


