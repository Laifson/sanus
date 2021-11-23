import {useEffect, useState} from 'react'
import {
    deleteTherapist,
    getSavedTherapists,
    saveAllSearchedCards,
    saveOneSearchedCard,
    searchCardData,
    setNewStatus
} from '../service/kvb-api-service'

export default function useTherapists() {
    const [therapists, setTherapists] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTherapists()
    }, [])

    const getTherapists = () => {
        getSavedTherapists()
            .then(setTherapists)
            .catch(error => console.error(error))
    }

    const removeTherapist = id => {
        deleteTherapist(id).then(() =>
            setTherapists(therapists.filter(therapist => therapist.id !== id))
        )
    }

    const handleSearchButton = (params) => {
        setLoading(true)
        setCardData([])
        searchCardData(params)
            .then(setLoading(false))
            .then(setCardData)
            .catch(error => console.error(error));
    }

    const handleSaveAll = () => {
        saveAllSearchedCards(cardData).then(addedTherapists =>
            setTherapists([...therapists, addedTherapists]))
            .catch(error => console.error(error))
    }

    const saveTherapist = (therapist) => {
        saveOneSearchedCard(therapist).then(addedTherapist =>
            setTherapists([...therapists, addedTherapist]))
            .catch(error => console.error(error))
    }


    const handleChangeStatus = (therapist, statusToSet) => {
        therapist.status = statusToSet
        setNewStatus(therapist).then(() => getSavedTherapists())
    }

    return {
        cardData,
        loading,
        setCardData,
        handleSearchButton,
        handleSaveAll,
        saveTherapist,
        therapists,
        setTherapists,
        getTherapists,
        removeTherapist,
        handleChangeStatus,
    }

}
