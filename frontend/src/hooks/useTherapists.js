import {useEffect, useState} from 'react'
import {
    getSavedTherapists,
} from '../service/kv-api-service'

export default function useTherapists() {
    const [therapists, setTherapists] = useState([])

    const getTherapists = () => {
        getSavedTherapists()
            .then(setTherapists)
            .catch(error => console.error(error))
    }

    useEffect(() => {
        getSavedTherapists()
            .then(therapists => setTherapists(therapists))
            .catch(error => console.error(error.message))
    }, [])

    return { therapists, setTherapists, getTherapists }

}
