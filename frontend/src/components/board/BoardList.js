import styled from 'styled-components/macro'
import useTherapists from "../../hooks/useTherapists";
import TherapistCardNew from "../cards/TherapistCardNew";

export default function BoardList({ therapists, statusToShow, handleChangeStatus }) {
    const { removeTherapist } = useTherapists();

    function onDrop(event, newStatus) {
        handleChangeStatus(JSON.parse(event.dataTransfer.getData("therapist")), newStatus)
    }

    const filteredTherapists = therapists.filter((therapist)=> therapist.status === 'OPEN')

    return (
        <>
            <TaskListBoard droppable
                           onDragOver={(e) => {
                               e.preventDefault()
                           }
                           }
                           onDrop={(e) => {
                               onDrop(e, statusToShow)
                           }
                           }>
                {filteredTherapists.length > 0 ? filteredTherapists.map((therapist) => {
                    return <TherapistCardNew therapist={therapist} key={therapist.id} handleDeleteTherapist={removeTherapist}/>
                }) : <div/>}
            </TaskListBoard>
        </>
    )
}

const TaskListBoard = styled.div`
  display: flex;
  flex-direction: column;
`
