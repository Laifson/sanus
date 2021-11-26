import axios from "axios";
import { trackPromise } from 'react-promise-tracker';

const getHeader = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
}

export const searchCardData = (params, token) => {
    return axios.get('/api/search/?params=' + params, getHeader(token))
        .then(response => response.data)
}

export const getSavedTherapists = (token) => {
    return trackPromise(axios.get('/api/therapist', getHeader(token))
        .then(response => response.data))
}

export const saveAllSearchedCards = (cardData, token) => {
    return axios.post('/api/therapist', cardData, getHeader(token))
        .then(response => response.data)
}

export const saveOneSearchedCard = (therapist, token) => {
    return axios.post('/api/therapist/one', therapist, getHeader(token))
        .then(response => response.data)
}

export const deleteTherapist = (id, token) => {
    return axios.delete(`/api/therapist/${id}`, getHeader(token))
}

export const setNewStatus = (therapist, token) => {
    return axios.put(`/api/therapist/${therapist.id}`, therapist, getHeader(token))
        .then(result => result.data)
        .catch(error => console.error(error))
}
