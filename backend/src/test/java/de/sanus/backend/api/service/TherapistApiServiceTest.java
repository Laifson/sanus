package de.sanus.backend.api.service;

import de.sanus.backend.api.dto.KbvResultDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import java.util.List;
import java.util.Objects;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TherapistApiServiceTest {

    @Autowired
    private TestRestTemplate restTemplate;

    private static final String API_URL = "https://api.kollegensuche.kbv.de/FHIR/PractitionerRole?arztgruppe=12";

    @Test
    void getTherapists_shouldReturnDataFromKbvApi() {
        // GIVEN
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        // WHEN
        ResponseEntity<KbvResultDto> response = restTemplate.exchange(API_URL, HttpMethod.GET, new HttpEntity<>(headers),KbvResultDto.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertFalse(Objects.requireNonNull(response.getBody()).getEntry().get(1).getResource().getName().isEmpty());
    }

    @Test
    void filterEntries() {
        // GIVEN


        // WHEN

        // THEN

    }
}