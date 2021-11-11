package de.sanus.backend.api.service;

import de.sanus.backend.api.dto.PractitionerEntriesDto;
import de.sanus.backend.api.dto.resource.EntryDto;
import de.sanus.backend.service.IdService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
public class TherapistApiWrapper {

    public List<PractitionerEntriesDto> filterEntries(List<EntryDto> entryDtos) {
        List<PractitionerEntriesDto> wrappedList = new ArrayList<>();

        List<EntryDto> practitionerRoleEntries = entryDtos.stream()
                .filter(e -> Objects.nonNull(e.getResource().getPractitioner()))
                .collect(Collectors.toList());

        // TODO: Use Range for "sublist" of entries
        practitionerRoleEntries.forEach(e -> wrappedList.add(createPractitionerEntriesDto(e, entryDtos)));

        return wrappedList;
    }

    private PractitionerEntriesDto createPractitionerEntriesDto(EntryDto practitionerRoleDto, List<EntryDto> entryDtos) {

        return PractitionerEntriesDto.builder()
                .practitionerRoleEntry(practitionerRoleDto)
                .practitionerEntry(findPractitionerEntry(practitionerRoleDto, entryDtos))
                .organizationEntry(findOrganizationEntry(practitionerRoleDto, entryDtos))
                .locationEntry(findLocationEntry(practitionerRoleDto, entryDtos))
                .build();
    }

    private EntryDto findOrganizationEntry(EntryDto practitionerRoleDto, List<EntryDto> entryDtos) {

        String entryId = practitionerRoleDto.getResource().getOrganization().getReference();

        // Todo regex
        Optional<EntryDto> organizationOptional = entryDtos.stream()
                .filter(e -> e.getFullUrl().contains(entryId))
                .findFirst();

        if (organizationOptional.isPresent()) {
            return organizationOptional.get();
        } else {
            log.warn("Organization not found! orga entry: " + entryId + " practitioner entry:" + practitionerRoleDto);
            return null;
        }
    }

    private EntryDto findPractitionerEntry(EntryDto practitionerRoleDto, List<EntryDto> entryDtos) {

        String entryId = practitionerRoleDto.getResource().getPractitioner().getReference();

        // Todo regex
        Optional<EntryDto> practitionerOptional = entryDtos.stream()
                .filter(e -> e.getFullUrl().contains(entryId))
                .findFirst();

        if (practitionerOptional.isPresent()) {
            return practitionerOptional.get();
        } else {
            log.warn("Practitioner not found! practitioner entry: " + entryId + " practitioner entry:" + practitionerRoleDto);
            return null;
        }
    }

    private EntryDto findLocationEntry(EntryDto practitionerRoleDto, List<EntryDto> entryDtos) {

        String entryId = practitionerRoleDto.getResource().getLocation().get(0).getReference();

        // Todo regex
        Optional<EntryDto> practitionerOptional = entryDtos.stream()
                .filter(e -> e.getFullUrl().contains(entryId))
                .findFirst();

        if (practitionerOptional.isPresent()) {
            return practitionerOptional.get();
        } else {
            log.warn("Location not found! location entry: " + entryId + " practitioner entry:" + practitionerRoleDto);
            return null;
        }
    }
}