package de.sanus.backend.api.service;

import de.sanus.backend.api.dto.KbvResultDto;
import de.sanus.backend.api.dto.PractitionerEntriesDto;
import de.sanus.backend.api.dto.resource.EntryDto;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TherapistApiService {

    private final RestTemplate restTemplate;
    private final TherapistApiWrapper therapistApiWrapper = new TherapistApiWrapper();

    /* for testing purposes the city param is hardcoded */
    private static final String API_URL = "https://api.kollegensuche.kbv.de/FHIR/PractitionerRole?arztgruppe=12&ort=bonn";

    public TherapistApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public KbvResultDto getTherapists() {

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        ResponseEntity<KbvResultDto> response = restTemplate.exchange(
                API_URL,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                KbvResultDto.class);

        if (response.getBody() == null) {
            throw new NoSuchElementException("couldn't receive data");
        }

        return response.getBody();

    }

    public List<PractitionerEntriesDto> wrappingJson() {
        return therapistApiWrapper.filterEntries(getTherapists().getEntry());
    }


}
