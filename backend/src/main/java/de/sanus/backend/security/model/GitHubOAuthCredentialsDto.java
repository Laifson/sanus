package de.sanus.backend.security.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GitHubOAuthCredentialsDto {

    @JsonProperty("client_id")
    String clientId;

    @JsonProperty("client_secret")
    String clientSecret;

    String code;
}
