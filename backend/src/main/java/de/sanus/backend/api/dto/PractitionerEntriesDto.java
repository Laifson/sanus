package de.sanus.backend.api.dto;

import de.sanus.backend.api.dto.resource.EntryDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PractitionerEntriesDto {

    private EntryDto practitionerRoleEntry;
    private EntryDto practitionerEntry;
    private EntryDto organizationEntry;
    private EntryDto locationEntry;

}
