import axios from "axios";

export const searchCardData = (params) => {
    return axios.get('/api/search/?params=' + params)
        .then(response => response.data)
}

export const getSavedTherapists = () => {
    return axios.get('/api/therapist')
        .then(response => response.data)
}

export const saveAllSearchedCards = (cardData) => {
    return axios.post('/api/therapist', cardData)
        .then(response => response.data)
}

export const saveOneSearchedCard = (therapist) => {
    const newTherapist ={
        id: therapist.id,
        title: therapist.title,
        firstName: therapist.firstName,
        lastName: therapist.lastName,
        gender: therapist.gender,
        phone: therapist.phone,
        email: therapist.email,
        website: therapist.website,
        street: therapist.street,
        postalCode: therapist.postalCode,
        city: therapist.city,
        languages: therapist.languages,
        forChildren: therapist.forChildren,
        accessibility: therapist.accessibility,
        status: therapist.status,
        dateAdded: therapist.dateAdded,
    }
    return axios.post('/api/therapist/one', newTherapist)
        .then(response => response.data)
}

export const deleteTherapist = (id) => {
    return axios.delete(`/api/therapist/${id}`)
}

export const setNewStatus = (therapist) => {
    console.log("Next Status", therapist)
    return axios.put(`/api/therapist/${therapist.id}`, therapist)
        .then(result => result.data)
        .catch(error => console.error(error))
}
