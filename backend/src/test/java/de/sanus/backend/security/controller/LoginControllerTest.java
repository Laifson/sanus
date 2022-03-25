package de.sanus.backend.security.controller;

import de.sanus.backend.security.model.AppUser;
import de.sanus.backend.security.repo.AppUserRepo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class LoginControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private AppUserRepo appUserRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${sanus.jwt.secret}")
    private String JWT_SECRET;

    @Test
    void login_WithValidCredentials_ShouldReturnValidJwt() {

        // GIVEN
        appUserRepo.save(AppUser.builder()
                .username("test-user")
                .password(passwordEncoder.encode("some-password"))
                .build());

        // WHEN
        AppUser appUser = new AppUser("test-user", "some-password");
        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", appUser, String.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));

        // extract Claims from Token
        Claims body = Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(response.getBody())
                .getBody();
        assertThat(body.getSubject(), is("test-user"));
    }

    @Test
    void login_WithInvalidCredentials_ShouldReturnError(){

        // GIVEN
        appUserRepo.save(AppUser.builder()
                .username("user")
                .password(passwordEncoder.encode("some-password"))
                .build());

        // WHEN
        AppUser appUser = new AppUser("user", "WRONG_PASSWORD");
        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", appUser, String.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.UNAUTHORIZED));

    }

    @Test
    void login_WithWrongUsername() {
        //GIVEN
        AppUser appUser = new AppUser("wrongusername", "test-password");

        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", appUser , String.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.UNAUTHORIZED));
    }
}