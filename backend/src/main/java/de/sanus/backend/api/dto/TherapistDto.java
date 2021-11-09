package de.sanus.backend.api.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.sanus.backend.api.dto.resource.EntryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TherapistDto {

    /* entry > i > .. */
    @JsonProperty("entry")
    private List<EntryDto> entry;

}
