package de.sanus.backend.api.service;

import de.sanus.backend.api.dto.KbvResultDto;
import de.sanus.backend.api.dto.PractitionerEntriesDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TherapistApiService {

    private final RestTemplate restTemplate;
    private final TherapistApiWrapper therapistApiWrapper;

    private static final String API_URL = "https://api.kollegensuche.kbv.de/FHIR/PractitionerRole?arztgruppe=12";

    @Autowired
    public TherapistApiService(RestTemplate restTemplate, TherapistApiWrapper therapistApiWrapper) {
        this.restTemplate = restTemplate;
        this.therapistApiWrapper = therapistApiWrapper;
    }

    public KbvResultDto getTherapists(String params) {

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        ResponseEntity<KbvResultDto> response = restTemplate.exchange(
                API_URL + params,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                KbvResultDto.class);

        if (response.getBody() == null) {
            throw new NoSuchElementException("couldn't receive data");
        }

        return response.getBody();

    }

    public List<PractitionerEntriesDto> filterEntries(String params) {
        return therapistApiWrapper.filterEntries(getTherapists(params).getEntry());
    }

}
