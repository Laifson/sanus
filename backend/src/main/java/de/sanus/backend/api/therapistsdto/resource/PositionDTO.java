package de.sanus.backend.api.dto.psychotherapists;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class PositionDTO {

    @JsonProperty("longitude")
    private Double longitude;

    @JsonProperty("latitude")
    private Double latitude;

}
