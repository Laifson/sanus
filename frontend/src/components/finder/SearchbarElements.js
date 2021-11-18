import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-areas: 
  "CityField" "NameField" 
  "PostalField" "RadiusField"
  "GroupField" "BarrierField"
  "ResetButton" "SubmitButton";

  @media screen and (max-width: 768px) {
    grid-template-areas: 
    "CityField" 
    "NameField"
    "PostalField" "RadiusField"
    "GroupField" "BarrierField"
    "ResetButton" "SubmitButton";
  }
`;

export const CityField = styled.section`
  grid-area: CityField;
`

export const NameField = styled.section`
  grid-area: NameField;
`

export const PostalField = styled.section`
  grid-area: PostalField;
`

export const RadiusField = styled.section`
  grid-area: RadiusField;
`

export const GroupField = styled.section`
  grid-area: GroupField;
`

export const BarrierField = styled.section`
  grid-area: BarrierField;
`

export const ResetButtonField = styled.section`
  grid-area: BarrierField;
`

export const SubmitButtonField = styled.section`
  grid-area: BarrierField;
`

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: .1rem;
  margin-left: .5rem;
  font-size: 1.2rem;
  color: #363636;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 2px solid rgba(0, 0, 0, .2);
  border-radius: 4px;
  height: .3rem;
  outline: none;
  font-size: 1.2rem;

  &:hover {
    border: 2px solid rgba(163, 196, 243, .6);
    transition: all ease .2s;
  }

  &:focus {
    border: 2px solid #A3C4F3;
  }
`;

export const DropdownRadius = styled.select`
  border: 2px solid rgba(0, 0, 0, .1);
  border-radius: 4px;
  height: 2.23rem;
  font-size: 1.2rem;
  width: 7rem;
  outline: none;
  background-color: #fff;
  color: #363636;
  cursor: pointer;

  option {
    color: #363636;
  }

  &:hover {
    border: 2px solid rgba(163, 196, 243, .6);
    transition: all ease .2s;
  }

  &:focus {
    border: 2px solid #A3C4F3;
  }
`;

export const DropdownGroup = styled.select`
  border: 2px solid rgba(0, 0, 0, .1);
  border-radius: 4px;
  height: 2.23rem;
  font-size: 1.2rem;
  width: 15rem;
  outline: none;
  background-color: #fff;
  color: #363636;
  cursor: pointer;

  option {
    color: #363636;
  }

  &:hover {
    border: 2px solid rgba(163, 196, 243, .6);
    transition: all ease .2s;
  }

  &:focus {
    border: 2px solid #A3C4F3;
  }
`;

export const BarrierWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0 0 0;
  margin-left: .5rem;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const BarrierCheck = styled.input`
  margin-left: .5rem;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  grid-column: 3;
  grid-row: 3;
`

export const ResetButton = styled.button`
  height: 2.5rem;
  margin: -.5rem 0 1rem 0.2rem;
  border: none;
  border-radius: 4px;
  color: #363636;
  font-size: 1.2rem;
  width: 12rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, .2);

  &:hover {
    background-color: rgba(0, 0, 0, .3);
    transition: background-color .3s, color .3s;
  }
`;

export const SearchButton = styled.button`
  height: 2.5rem;
  margin: -.5rem 0 1rem .5rem;
  border: none;
  width: 15rem;
  border-radius: 4px;
  color: #363636;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: rgba(163, 196, 243, .6);

  &:hover {
    background-color: rgba(163, 196, 243);
    color: #363636;
    transition: background-color .3s, color .3s;
  }
`;

