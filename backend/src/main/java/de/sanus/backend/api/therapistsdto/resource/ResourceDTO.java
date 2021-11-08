package de.sanus.backend.api.dto.psychotherapists;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.sanus.backend.api.dto.psychotherapists.qualificationDTO.QualificationDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ResourceDTO {

    private List<NameDTO> name;
    private List<AddressDTO> address;
    private List<TelecomDTO> telecom;
    private List<AvailableTimeDTO> availableTime;
    private List<ExtensionDTO> extension;
    private List<QualificationDTO> qualification;

    @JsonProperty("position")
    private PositionDTO position;

    @JsonProperty("gender")
    private String gender;

}
