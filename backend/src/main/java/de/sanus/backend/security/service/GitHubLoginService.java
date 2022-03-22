package de.sanus.backend.security.service;

import de.sanus.backend.security.model.GitHubUserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class GitHubLoginService {

    private final GitHubApiService gitHubApiService;
    private final JWTUtilService jwtUtilService;

    @Autowired
    public GitHubLoginService(GitHubApiService gitHubApiService, JWTUtilService jwtUtilService) {
        this.gitHubApiService = gitHubApiService;
        this.jwtUtilService = jwtUtilService;
    }

    public String verifyGitHubLogin(String gitHubLoginCode) {

        // Verify code via GitHub
        String gitHubToken = gitHubApiService.getGitHubToken(gitHubLoginCode);

        // Get user info
        GitHubUserDto gitHubUserDto = gitHubApiService.retrieveUserInfo(gitHubToken);

        // Create JWT Access Token
        return jwtUtilService.createToken(new HashMap<>(), gitHubUserDto.getUsername());
    }
}
