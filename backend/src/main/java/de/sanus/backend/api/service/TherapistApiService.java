package de.sanus.backend.api.service;

import de.sanus.backend.api.dto.TherapistDto;
import de.sanus.backend.api.dto.resource.EntryDto;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TherapistApiService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final TherapistApiWrapper therapistApiWrapper = new TherapistApiWrapper();

    /* for testing purposes the city param is hardcoded */
    private static final String API_URL = "https://api.kollegensuche.kbv.de/FHIR/PractitionerRole?arztgruppe=12&ort=bonn";

    public TherapistDto getPsychotherapists() {

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        ResponseEntity<TherapistDto> response = restTemplate.exchange(
                API_URL,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                TherapistDto.class);

        if (response.getBody() == null) {
            throw new NoSuchElementException("couldn't receive data");
        }

        return response.getBody();

    }

    public List<EntryDto> wrappingJson() {
        return therapistApiWrapper.filterEntries(List.of(getPsychotherapists()));
    }


}
