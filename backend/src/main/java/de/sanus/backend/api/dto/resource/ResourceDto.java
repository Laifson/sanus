package de.sanus.backend.api.dto.resource;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.sanus.backend.api.dto.resource.qualificationDto.QualificationDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ResourceDto {

    private List<NameDto> name;
    private List<AddressDto> address;
    private List<TelecomDto> telecom;
    private List<AvailableTimeDto> availableTime;
    private List<ExtensionDto> extension;
    private List<QualificationDto> qualification;

    @JsonProperty("position")
    private PositionDto position;

    @JsonProperty("gender")
    private String gender;

}
