package de.sanus.backend.api.dto.resource;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class AddressDto {

    @JsonProperty("city")
    private String city;

    @JsonProperty("postalCode")
    private String postalCode;

    @JsonProperty("line")
    private List<String> street;
}
