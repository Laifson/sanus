import { useContext, useEffect, useState } from 'react'
import {
    searchPsychotherapists,
} from '../service/kv-api-service'

export default function useTherapists() {
    const [therapists, setTherapists] = useState([])

    const onSearch = () => {
        searchPsychotherapists()
            .then(therapists => setTherapists(therapists))
            .catch(error => console.error(error.message))
    }

    useEffect(() => {
        searchPsychotherapists()
            .then(therapists => setTherapists(therapists))
            .catch(error => console.error(error.message))
    }, [])

    return { therapists }
}
