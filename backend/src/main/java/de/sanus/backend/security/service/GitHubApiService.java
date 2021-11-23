package de.sanus.backend.security.service;

import de.sanus.backend.controller.exception.GitHubAuthenticationException;
import de.sanus.backend.security.model.GitHubAccessTokenDto;
import de.sanus.backend.security.model.GitHubOAuthCredentialsDto;
import de.sanus.backend.security.model.GitHubUserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class GitHubApiService {

    RestTemplate restTemplate;

    @Value("${neuefische.todo.client.id}")
    private String clientId;

    @Value("${neuefische.todo.github.secret}")
    private String gitHubSecret;

    private static final String GIT_HUB_URL = "https://github.com/";
    private static final String GIT_HUB_API_URL = "https://api.github.com/";

    @Autowired
    public GitHubApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getGitHubToken(String gitHubLoginCode) {

        GitHubOAuthCredentialsDto credentialsDto = GitHubOAuthCredentialsDto.builder()
                .clientId(clientId)
                .clientSecret(gitHubSecret)
                .code(gitHubLoginCode)
                .build();

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));

        ResponseEntity<GitHubAccessTokenDto> response;
        try {
            response = restTemplate.exchange(
                    GIT_HUB_URL + "login/oauth/access_token",
                    HttpMethod.POST,
                    new HttpEntity<>(credentialsDto, httpHeaders),
                    GitHubAccessTokenDto.class);

        } catch (RestClientException ex) {
            throw new GitHubAuthenticationException("Error while authenticating via GitHub!", ex);
        }

        if(response.getBody() == null){
            throw new GitHubAuthenticationException("Error while authenticating via GitHub! Returned body was null instead of containing access token.");
        }

        return response.getBody().getAccessToken();
    }

    public GitHubUserDto retrieveUserInfo(String gitHubToken) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization", "token " + gitHubToken);

        ResponseEntity<GitHubUserDto> response;
        try {
            response = restTemplate.exchange(
                    GIT_HUB_API_URL + "user",
                    HttpMethod.GET,
                    new HttpEntity<>(httpHeaders),
                    GitHubUserDto.class);

        } catch (RestClientException ex) {
            throw new GitHubAuthenticationException("Error while access GitHub user info!", ex);
        }

        if (response.getBody() == null) {
            throw new GitHubAuthenticationException("Error while access GitHub user info! Returned body was null instead of containing user info.");
        }

        return response.getBody();
    }
}
