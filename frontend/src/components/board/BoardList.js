import styled from 'styled-components/macro'
import useTherapists from "../../hooks/useTherapists";
import TherapistCardNew from "../cards/TherapistCardNew";

export default function BoardList({columnHeader, therapists, statusToShow, handleChangeStatus }) {
    const { removeTherapist } = useTherapists();

    function onDrop(event, newStatus) {
        handleChangeStatus(JSON.parse(event.dataTransfer.getData("therapist")), newStatus)
    }

    const filteredTherapists = therapists.filter((therapist)=> therapist.status === statusToShow)

    return (
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
                    return <TherapistCardNew therapist={therapist} key={therapist.id} handleDeleteTherapist={removeTherapist}/>
                }) : <div/>}
            </TherapistListBoard>
        </div>
    )
}

const TherapistListBoard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
