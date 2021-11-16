import axios from "axios";

export const searchCardData = (params) => {
        return axios.get('/api/search/?params=' + params).then(response => response.data)
}