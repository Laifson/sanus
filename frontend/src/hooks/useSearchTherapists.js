import { useState } from 'react'
import {
    saveAllSearchedCards,
    searchCardData,
} from '../service/kv-api-service'

export default function useSearchTherapists() {
    const [cardData, setCardData] = useState([]);

    const handleSearchButton = (params) => {
        searchCardData(params)
            .then(setCardData)
            .catch(error => console.error(error))
    }

    const handleSaveAll = () => {
        saveAllSearchedCards(cardData)
            .catch(error => console.error(error))
    }

    return { cardData, setCardData, handleSearchButton, handleSaveAll }
}
