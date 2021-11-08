package de.sanus.backend.api.dto.psychotherapists;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class EntryDTO {

    /* entry > i > resource */
    private ResourceDTO resource;

}
