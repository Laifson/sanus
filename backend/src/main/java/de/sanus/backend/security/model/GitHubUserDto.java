package de.sanus.backend.security.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GitHubUserDto {

    @JsonProperty("login")
    String username;
}
