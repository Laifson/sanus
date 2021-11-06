package de.sanus.backend.model.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
//@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TitleAndName {

    @JsonProperty("prefix")
    private String title;

    @JsonProperty("given")
    private String firstName;

    @JsonProperty("family")
    private String lastName;


}
