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
public class AvailableTimeDto {

    @JsonProperty("daysOfWeek")
    private List<String> daysOfWeek;

    @JsonProperty("availableStartTime")
    private String availableStartTime;

    @JsonProperty("availableEndTime")
    private String availableEndTime;

}
