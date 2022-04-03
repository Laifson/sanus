package de.sanus.backend.controller;

import de.sanus.backend.model.Therapist;
import de.sanus.backend.repo.TherapistRepo;
import de.sanus.backend.security.model.AppUser;
import de.sanus.backend.security.repo.AppUserRepo;
import de.sanus.backend.service.IdService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

import static de.sanus.backend.model.enums.Accessibility.FULL;
import static de.sanus.backend.model.enums.Accessibility.RESTRICTED;
import static de.sanus.backend.model.enums.Status.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TherapistControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TherapistRepo therapistRepo;

    @Autowired
    private AppUserRepo userRepo;

    @BeforeEach
    public void clearDb() {
        therapistRepo.deleteAll();
    }

    @LocalServerPort
    private int port;

    @Test
    void getTherapists_shouldReturnTherapistsFromDB() {
        // GIVEN
        therapistRepo.save(new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L));
        therapistRepo.save(new Therapist("825", "Prof. Dr.", "ZweiterTestVorname", "ZweiterTestNachname", "male", "654321", "test@zweiter-test.de", "www.zweiter-test.de", "Testweg 22", "54321", "Stadttest", List.of("Deutsch", "Italienisch"), true, FULL, ACTIVE, 2028L));

        // WHEN
        ResponseEntity<Therapist[]> response = restTemplate.exchange("/api/therapist", HttpMethod.GET, new HttpEntity<>(getHttpHeadersWithJWT()), Therapist[].class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L),
                new Therapist("825", "Prof. Dr.", "ZweiterTestVorname", "ZweiterTestNachname", "male", "654321", "test@zweiter-test.de", "www.zweiter-test.de", "Testweg 22", "54321", "Stadttest", List.of("Deutsch", "Italienisch"), true, FULL, ACTIVE, 2028L)));
    }

    @Test
    void getTherapist_shouldReturnTherapistItem() {
        // GIVEN
        therapistRepo.save(new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L));
        therapistRepo.save(new Therapist("825", "Prof. Dr.", "ZweiterTestVorname", "ZweiterTestNachname", "male", "654321", "test@zweiter-test.de", "www.zweiter-test.de", "Testweg 22", "54321", "Stadttest", List.of("Deutsch", "Italienisch"), true, FULL, ACTIVE, 2028L));

        // WHEN
        ResponseEntity<Therapist> response = restTemplate.exchange("/api/therapist/825", HttpMethod.GET, new HttpEntity<>(getHttpHeadersWithJWT()), Therapist.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new Therapist("825", "Prof. Dr.", "ZweiterTestVorname", "ZweiterTestNachname", "male", "654321", "test@zweiter-test.de", "www.zweiter-test.de", "Testweg 22", "54321", "Stadttest", List.of("Deutsch", "Italienisch"), true, FULL, ACTIVE, 2028L)));
    }

    @Test
    void addAllTherapists_shouldAddAtLeastOneItemToTheDB() {
        HttpHeaders headers = getHttpHeadersWithJWT();

        // GIVEN
        Iterable<Therapist> therapists = List.of(
                new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L),
                new Therapist("825", "Prof. Dr.", "ZweiterTestVorname", "ZweiterTestNachname", "male", "654321", "test@zweiter-test.de", "www.zweiter-test.de", "Testweg 22", "54321", "Stadttest", List.of("Deutsch", "Italienisch"), true, FULL, ACTIVE, 2028L));

        // WHEN
        ResponseEntity<Therapist[]> postResponse = restTemplate.exchange("/api/therapist", HttpMethod.POST, new HttpEntity<>(therapists, headers), Therapist[].class);
        Therapist[] actual = postResponse.getBody();

        // THEN
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(actual);

        // THEN: check via GET if elements was created

    }

    @Test
    void addOneTherapist_shouldAddOneTherapistToTheDB() {
        HttpHeaders headers = getHttpHeadersWithJWT();

        // GIVEN
        Therapist therapist = new Therapist("528", " Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L);

        // WHEN
        ResponseEntity<Therapist> postResponse = restTemplate.exchange("/api/therapist/one", HttpMethod.POST, new HttpEntity<>(therapist, headers), Therapist.class);
        Therapist actual = postResponse.getBody();

        // THEN
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(actual);
        assertEquals(new Therapist("528", " Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L), actual);

        // THEN: check via GET if element was created
        String actualId = actual.getId();
        ResponseEntity<Therapist> getResponse = restTemplate.exchange("/api/therapist/" + actualId, HttpMethod.GET, new HttpEntity<>(headers), Therapist.class);
        Therapist persistedTherapist = getResponse.getBody();

        assertNotNull(persistedTherapist);
        assertEquals(actualId, persistedTherapist.getId());
        assertEquals(therapist.getLastName(), persistedTherapist.getLastName());
        assertEquals(therapist.getAccessibility(), persistedTherapist.getAccessibility());
    }

    @Test
    void updateTherapist_shouldUpdateTherapist() {
        // GIVEN
        therapistRepo.save(new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L));
        therapistRepo.save(new Therapist("825", "Prof. Dr.", "ZweiterTestVorname", "ZweiterTestNachname", "male", "654321", "test@zweiter-test.de", "www.zweiter-test.de", "Testweg 22", "54321", "Stadttest", List.of("Deutsch", "Italienisch"), true, FULL, ACTIVE, 2028L));

        // WHEN
        Therapist updatedTherapistsStatus = new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, WAITLIST, 8202L);
        restTemplate.exchange("/api/therapist/528", HttpMethod.PUT, new HttpEntity<>(updatedTherapistsStatus, getHttpHeadersWithJWT()), Therapist.class);

        // THEN
        List<Therapist> therapistList = therapistRepo.findAll();
        assertThat(therapistList, containsInAnyOrder(
                new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, WAITLIST, 8202L),
                new Therapist("825", "Prof. Dr.", "ZweiterTestVorname", "ZweiterTestNachname", "male", "654321", "test@zweiter-test.de", "www.zweiter-test.de", "Testweg 22", "54321", "Stadttest", List.of("Deutsch", "Italienisch"), true, FULL, ACTIVE, 2028L)));
    }

    @Test
    void deleteTherapist_shouldDeleteTherapistFromDB() {
        // GIVEN
        therapistRepo.save(new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L));
        therapistRepo.save(new Therapist("825", "Prof. Dr.", "ZweiterTestVorname", "ZweiterTestNachname", "male", "654321", "test@zweiter-test.de", "www.zweiter-test.de", "Testweg 22", "54321", "Stadttest", List.of("Deutsch", "Italienisch"), true, FULL, ACTIVE, 2028L));

        // WHEN
        restTemplate.exchange("http://localhost:" + port + "/api/therapist/825", HttpMethod.DELETE, new HttpEntity<>(getHttpHeadersWithJWT()), Void.class);

        // THEN
        List<Therapist> therapistList = therapistRepo.findAll();
        assertEquals(therapistList, List.of(new Therapist("528", "Dr.", "TestVorname", "TestNachname", "female", "123456", "test@test.de", "www.test.de", "Teststraße 33", "12345", "Teststadt", List.of("Deutsch", "Englisch"), true, RESTRICTED, OPEN, 8202L)));
    }

    private HttpHeaders getHttpHeadersWithJWT() {
        userRepo.save(AppUser.builder()
                .username("test-username")
                .password(passwordEncoder.encode("some-password"))
                .build());
        AppUser loginData = new AppUser("test-username", "some-password");
        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", loginData, String.class);
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(response.getBody());
        return headers;
    }
}