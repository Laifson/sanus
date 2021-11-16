package de.sanus.backend.api.dto.resource;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class EntryDto {

    private String id;

    /* entry > i > resource */
    @JsonProperty("resource")
    private ResourceDto resource;

    /* entry > i > fullUrl */
    @JsonProperty("fullUrl")
    private String fullUrl;

}
