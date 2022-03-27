import styled from 'styled-components/macro'
import TherapistCard from "../cards/TherapistCardNew";
import {DragDropContext} from "react-beautiful-dnd";

export default function BoardList({ therapists, columnHeader, handleChangeStatus, statusToShow, removeTherapist }) {

    function onDrop(event, newStatus) {
        handleChangeStatus(JSON.parse(event.dataTransfer.getData("therapist")), newStatus)
    }

    const filteredTherapists = therapists.filter((therapist) => therapist.status === statusToShow)

    return (
        <DragDropContext>
            <div class="container" droppable
                 onDragOver={(e) => {
                     e.preventDefault()
                 }
                 }
                 onDrop={(e) => {
                     onDrop(e, statusToShow)
                 }
                 }>
                <TherapistListBoard>
                    <h4>{columnHeader}</h4>
                    {filteredTherapists.length > 0 ? filteredTherapists.map((therapist) => {
                        if (therapist.status === statusToShow) {
                            return <TherapistCard therapist={therapist} key={therapist.id}
                                                  handleDeleteTherapist={removeTherapist}
                                                  removeTherapist={removeTherapist}/>
                        }
                        return null
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
