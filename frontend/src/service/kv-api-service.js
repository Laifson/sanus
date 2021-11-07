import axios from "axios";

export const getPsychotherapists = (zipcode, distance) => {
        return axios
            .get("https://api.kollegensuche.kbv.de/FHIR/PractitionerRole?arztgruppe=12", {
                params: {
                    plz: zipcode,
                    distanz: distance
                }
            })
            .then(response => response.data)
            .catch((error) => console.log(error))
}