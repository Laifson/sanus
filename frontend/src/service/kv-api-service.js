import axios from "axios";

export const getCardData = () => {
        return axios.get('/api/search').then(response => response.data)
}