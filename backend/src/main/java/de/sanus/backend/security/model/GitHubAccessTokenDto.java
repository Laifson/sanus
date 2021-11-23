package de.sanus.backend.security.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;


@Data
public class GitHubAccessTokenDto {

    @JsonProperty("access_token")
    String accessToken;

}
