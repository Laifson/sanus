package de.sanus.backend.security.service;

import de.sanus.backend.security.model.GitHubUserDto;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class GitHubLoginService {

    private final GitHubApiService gitHubApiService;
    private final JWTUtilService jwtUtilService;

    public GitHubLoginService(GitHubApiService gitHubApiService, JWTUtilService jwtUtilService) {
        this.gitHubApiService = gitHubApiService;
        this.jwtUtilService = jwtUtilService;
    }

    public String verifyGitHubLogin(String code) {
        // 1.) Verify code via GitHub
        String gitHubToken = gitHubApiService.retrieveGitHubToken(code);

        // 2.) Retrieve User Info
        GitHubUserDto gitHubUserDto = gitHubApiService.retrieveUserInfo(gitHubToken);

        // 3.) Create JWT access token
        return jwtUtilService.createToken(new HashMap<>(), gitHubUserDto.getLogin());
    }
}
