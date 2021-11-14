package de.sanus.backend.api.dto.resource;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class NameDto {

    @JsonProperty("prefix")
    private List<String> prefix;

    @JsonProperty("given")
    private List<String> given;

    @JsonProperty("family")
    private String family;

}
