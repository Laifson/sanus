//package de.sanus.backend.api.service;
//
//import de.sanus.backend.api.dto.TherapistDto;
//import de.sanus.backend.api.dto.resource.EntryDto;
//import de.sanus.backend.api.dto.resource.ResourceDto;
//import org.hamcrest.Matchers;
//import org.junit.jupiter.api.Test;
//
//import org.springframework.http.*;
//import org.springframework.web.client.RestTemplate;
//
//import java.util.List;
//
//import static org.hamcrest.MatcherAssert.assertThat;
//import static org.mockito.Mockito.*;
//
//class TherapistApiServiceTest {
//
//    private final RestTemplate restTemplate = mock(RestTemplate.class);
//    private final TherapistApiService therapistApiService = new TherapistApiService(restTemplate);
//
//    private static final String API_URL = "https://api.kollegensuche.kbv.de/FHIR/PractitionerRole?arztgruppe=12";
//
//    @Test
//    void getTherapistsTest() {
//
//        // GIVEN
//        HttpHeaders headers = new HttpHeaders();
//        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
//
//        when(restTemplate.exchange(
//                API_URL,
//                HttpMethod.GET,
//                new HttpEntity<>(headers),
//                TherapistDto.class))
//                .thenReturn(ResponseEntity.ok(
//                        new TherapistDto(List.of(
//                                new EntryDto(null,
//                                        new ResourceDto(null, null, null, null, null, null, null, null, null, null, "female"), null)))));
//
//        // WHEN
//        TherapistDto therapistDto = therapistApiService.getTherapists();
//
//        // THEN
//        assertThat(therapistDto.getEntry().get(0).getResource().getGender(), Matchers.is("female"));
//
//        verify(restTemplate).exchange(
//                "https://api.kollegensuche.kbv.de/FHIR/PractitionerRole?arztgruppe=12",
//                HttpMethod.GET,
//                new HttpEntity<>(headers),
//                TherapistDto.class);
//    }
//}