package de.sanus.backend.security.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class GitHubAccessTokenDto {

    @JsonProperty("access_token")
    String accessToken;

}
