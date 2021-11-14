import {searchTherapists} from "../service/kv-api-service";
import {useEffect, useState} from "react";
import axios from "axios";


export default function useSearchTherapists() {
    const [cardData, setCardData] = useState([]);

const onSearch = () => {
    setCardData(searchTherapists)
}

const allCardData = async() => {
        const response = await axios.get('api/search')
    setCardData(response.data)
    }

    useEffect(() => {
        allCardData()
    }, [])

    return { cardData, onSearch, allCardData }
}
