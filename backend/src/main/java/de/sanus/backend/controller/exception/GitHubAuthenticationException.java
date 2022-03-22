package de.sanus.backend.controller.exception;

import org.springframework.web.client.RestClientException;

public class GitHubAuthenticationException extends RuntimeException {

    public GitHubAuthenticationException(String message, RestClientException ex) {
        super(message, ex);
    }

    public GitHubAuthenticationException(String message) {
        super(message);
    }
}
