package de.sanus.backend.security.service;

import de.sanus.backend.controller.exception.GitHubAuthenticationException;
import de.sanus.backend.security.model.GitHubAccessTokenDto;
import de.sanus.backend.security.model.GitHubOAuthCredentialsDto;
import de.sanus.backend.security.model.GitHubUserDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class GitHubApiService {

    private final RestTemplate restTemplate;

    @Value("${sanus.client.id}")
    private String clientId;

    @Value("${sanus.github.secret}")
    private String gitHubSecret;

    private static final String GITHUB_CODE_URL = "https://github.com/login/oauth/access_token";
    private static final String GITHUB_USER_URL = "https://api.github.com/user";

    public GitHubApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @SuppressWarnings({"java:S2259"})
    public String retrieveGitHubToken(String gitHubLoginCode) {

        GitHubOAuthCredentialsDto credentialsDto = GitHubOAuthCredentialsDto.builder()
                .clientId(clientId)
                .clientSecret(gitHubSecret)
                .code(gitHubLoginCode)
                .build();

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));

        ResponseEntity<GitHubAccessTokenDto> response = restTemplate.exchange(
                GITHUB_CODE_URL,
                HttpMethod.POST,
                new HttpEntity<>(credentialsDto, httpHeaders),
                GitHubAccessTokenDto.class);

        if (response.getBody() == null) {
            throw new GitHubAuthenticationException("Error while authenticating via GitHub! Returned body was null instead of containing an access token.");
        }

        return response.getBody().getAccessToken();
    }

    public GitHubUserDto retrieveUserInfo(String gitHubToken) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setBearerAuth(gitHubToken);

        ResponseEntity<GitHubUserDto> response = restTemplate.exchange(
                GITHUB_USER_URL,
                HttpMethod.GET,
                new HttpEntity<>(httpHeaders),
                GitHubUserDto.class);

        if (response.getBody() == null) {
            throw new GitHubAuthenticationException("Error while authenticating with code via GitHub! Body is null!");
        }

        return response.getBody();
    }
}
