import styled from "styled-components/macro";

export const CardBox = styled.div`
  flex: 0 0 auto;
  padding: 0.5rem;
`

export const CardWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 300px;
  grid-template-rows: 100% 55px;
  grid-template-areas: "text" "stats";
  border-radius: 18px;
  background: rgba(0, 0, 0, .9);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextDate = styled.span`
  color: #A3C4F3;
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0;
  line-height: 1;
  margin: 0;
  background: linear-gradient(25deg,#CFBAF0,#A3C4F3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding-top: 2px;
`;

export const TherapistGender = styled.span`
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 0;
  line-height: 1;
  margin: 0;
  background: linear-gradient(25deg,#CFBAF0,#A3C4F3);
  -webkit-background-clip: text;
  color: transparent;
  padding-top: 2px;
  font-family: 'Material Icons round';
`

export const CardTextBody = styled.p`
  color: grey;
  font-size: 18px;
  font-weight: 300;
  padding-top: 4px;
  line-height: 1.5;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  //background: #A3C4F3;
  background: ${therapist => therapist.forChildren === 'true' ? '#CFBAF0' : '#A3C4F3'};
`;

export const CardStats = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
padding: 10px;
font-family: Material Icons Round, sans-serif;
font-size: 2rem;
cursor: pointer;

`;

export const CheckedButton = styled.a`
color: rgba(0, 0, 0, .9);
text-decoration: none;
transition: all ease .3s;

&:hover {
color: rgba(81, 180, 87);
}
`;

export const ExpandButton = styled.a`
color: rgba(0, 0, 0, .9);
text-decoration: none;
transition: all ease .3s;

&:hover {
color: rgba(200, 200, 200);
}
`;

export const DeleteButton = styled.a`
color: rgba(0, 0, 0, .9);
text-decoration: none;
transition: all ease .3s;

&:hover {
color: rgb(236, 81, 87);
}
`;
