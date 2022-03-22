import {useContext, useEffect, useState} from 'react'
import {
    deleteTherapist,
    getSavedTherapists,
    saveAllSearchedCards,
    saveOneSearchedCard,
    searchCardData,
    setNewStatus
} from '../service/kvb-api-service'
import { AuthContext } from '../context/AuthProvider'

export default function useTherapists() {
    const [therapists, setTherapists] = useState([]);
    const [cardData, setCardData] = useState([]);
    const { token } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const removeTherapist = id => {
        deleteTherapist(id, token).then(() =>
            setTherapists(therapists.filter(therapist => therapist.id !== id))
        )
    }

    const handleSearchButton = (params) => {
        setIsLoading(true);
        setCardData([])
        searchCardData(params, token)
            .then(setCardData)
            .then(() => setIsLoading(false))
            .catch(error => console.error(error));
    }

    const handleSaveAll = () => {
        saveAllSearchedCards(cardData, token).then(addedTherapists =>
            setTherapists([...therapists, addedTherapists]))
            .catch(error => console.error(error))
    }

    const saveTherapist = (therapist) => {
        saveOneSearchedCard(therapist, token).then(addedTherapist =>
            setTherapists([...therapists, addedTherapist]))
            .catch(error => console.error(error))
    }

    const handleChangeStatus = (therapist, statusToSet) => {
        therapist.status = statusToSet
        setNewStatus(therapist, token)
            .then(() => getSavedTherapists(token))
            .then(therapists => setTherapists(therapists))
    }

    useEffect(() => {
        token &&
        getSavedTherapists(token)
            .then(therapists => setTherapists(therapists))
            .catch(error => console.error(error))
    }, [token])

    return {
        isLoading,
        cardData,
        setCardData,
        handleSearchButton,
        handleSaveAll,
        saveTherapist,
        therapists,
        setTherapists,
        removeTherapist,
        handleChangeStatus,
    }

}
