import axios from "axios";

export const searchCardData = (params) => {
        return axios.get('/api/search/?params=' + params).then(response => response.data)
}

export const getSavedTherapists = () => {
        return axios.get('/api/therapist').then(response => response.data)
}

export const saveAllSearchedCards = (cardData) => {
        return axios.post('/api/therapist', cardData).then(response => response.data)
}