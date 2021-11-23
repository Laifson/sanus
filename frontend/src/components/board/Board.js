import React from "react";
import styled from "styled-components/macro";
import BoardList from "./BoardList";
import useTherapists from "../../hooks/useTherapists";

export default function Board({handleChangeStatus, handleDelete}) {
const { therapists } = useTherapists()
    console.log(therapists)
    return (
            <Container>
                <h1>HALLO</h1>
                               <>
                                   <BoardList therapists={therapists} statusToShow="OPEN"
                                              handleChangeStatus={handleChangeStatus} handleDelete={handleDelete}/>
                                   <BoardList therapists={therapists} statusToShow="ACTIVE"
                                              handleChangeStatus={handleChangeStatus} handleDelete={handleDelete}/>
                                   <BoardList therapists={therapists} statusToShow="OCCUPIED"
                                              handleChangeStatus={handleChangeStatus} handleDelete={handleDelete}/>
                               </>
            </Container>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
