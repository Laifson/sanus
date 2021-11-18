import React from "react";
import styled from "styled-components/macro";
import useTherapists from "../../hooks/useTherapists";
import TherapistCard from "../cards/TherapistCard";

export default function List() {
    const { therapists } = useTherapists();




    return (
        <StyledContainer>
            {therapists.map(therapist => <TherapistCard key={therapist.id} therapist={therapist}/>)}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`