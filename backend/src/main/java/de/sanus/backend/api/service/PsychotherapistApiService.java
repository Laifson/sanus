package de.sanus.backend.api.service;

import de.sanus.backend.api.dto.psychotherapists.PsychotherapistDTO;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PsychotherapistApiService {

    private final RestTemplate restTemplate = new RestTemplate();

    private static final String API_URL = "https://api.kollegensuche.kbv.de/FHIR/PractitionerRole?arztgruppe=12&plz=56070";


    public PsychotherapistDTO getPsychotherapists() {

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        ResponseEntity<PsychotherapistDTO> response = restTemplate.exchange(
                API_URL,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                PsychotherapistDTO.class);

        if (response.getBody() == null) {
            throw new NoSuchElementException("couldn't receive data");
        }
        return response.getBody();
    }
}
