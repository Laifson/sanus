import styled from 'styled-components/macro'
import TherapistCard from "../cards/TherapistCardNew";
import {DragDropContext} from "react-beautiful-dnd";

export default function BoardList({columnHeader, therapists, statusToShow, handleChangeStatus, removeTherapist }) {

    function onDrop(event, newStatus) {
        handleChangeStatus(JSON.parse(event.dataTransfer.getData("therapist")), newStatus)
    }

    const filteredTherapists = therapists.filter((therapist)=> therapist.status === statusToShow)

    return (
        <DragDropContext>
        <div class="container">
            <TherapistListBoard droppable
                           onDragOver={(e) => {
                               e.preventDefault()
                           }
                           }
                           onDrop={(e) => {
                               onDrop(e, statusToShow)
                           }
                           }>
                <h4>{columnHeader}</h4>
                {filteredTherapists.length > 0 ? filteredTherapists.map((therapist) => {
                    return <TherapistCard therapist={therapist} key={therapist.id} handleDeleteTherapist={removeTherapist} removeTherapist={removeTherapist}/>
                }) : <div/>}
            </TherapistListBoard>
        </div>
            </DragDropContext>
    )
}

const TherapistListBoard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
