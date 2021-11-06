package de.sanus.backend.api.dto.psychotherapists;

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
public class PsychotherapistDTO {

    /* entry > i > .. */
    @JsonProperty("entry")
    private List<EntryDTO> entry;

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("=================================\r\n");
        for(EntryDTO entryDTO : entry) {
            str.append("\t" + "Title: ").append(entryDTO.getResource().getName()).append("\r\n");
        }

        return str.toString();
    }
}
