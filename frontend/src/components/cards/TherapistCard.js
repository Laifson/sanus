import * as React from 'react';
import styled from 'styled-components'

export default function TherapistCard({ cardData, onSave, onExpand, onDelete }) {

    return (
        <Wrapper>
        <Name>
            {cardData.title}
            {cardData.firstName}
            {cardData.lastName}
        </Name>
            {onSave && <button onClick={() => onSave(cardData.id)}>Speichern</button>}
            {onDelete && <button onClick={() => onDelete(cardData.id)}>Löschen</button>}
            {onExpand && <button onClick={() => onExpand(cardData.id)}>Weitere Informationen</button>}
        </Wrapper>
    )

}

const Wrapper = styled.div`
  border: 3px solid darkblue;
  background-color: ghostwhite;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
`

const Name = styled.section`
  padding: 0.5em;
`