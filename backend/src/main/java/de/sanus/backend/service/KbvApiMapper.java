package de.sanus.backend.service;

import de.sanus.backend.api.dto.PractitionerEntriesDto;
import de.sanus.backend.api.dto.resource.ExtensionDto;
import de.sanus.backend.api.dto.resource.NameDto;
import de.sanus.backend.api.dto.resource.TelecomDto;
import de.sanus.backend.model.Therapist;
import de.sanus.backend.model.enums.Accessibility;
import de.sanus.backend.model.enums.Status;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class KbvApiMapper {

    private final IdService idService;

    public KbvApiMapper(IdService idService) {
        this.idService = idService;
    }

    public List<Therapist> mapToTherapist(List<PractitionerEntriesDto> practitionerEntriesDtos) {
        List<Therapist> kbvTherapists = new ArrayList<>();

        practitionerEntriesDtos.forEach(e -> kbvTherapists.add(
                Therapist.builder()
                        .id(idService.generateId())
                        .title(getTitle(e.getPractitionerEntry().getResource().getName().get(0)))
                        .firstName(e.getPractitionerEntry().getResource().getName().get(0).getGiven().get(0))
                        .lastName(e.getPractitionerEntry().getResource().getName().get(0).getFamily())
                        .gender(e.getPractitionerEntry().getResource().getGender())
                        .phone(getPhoneNumber(e.getPractitionerRoleEntry().getResource().getTelecom()))
                        .email(getEmail(e.getPractitionerRoleEntry().getResource().getTelecom()))
                        .website(getWebsite(e.getPractitionerRoleEntry().getResource().getTelecom()))
                        .street(e.getOrganizationEntry().getResource().getAddress().get(0).getStreet().get(0))
                        .postalCode(e.getOrganizationEntry().getResource().getAddress().get(0).getPostalCode())
                        .city(e.getOrganizationEntry().getResource().getAddress().get(0).getCity())
                        .languages(getLanguages(e.getPractitionerEntry().getResource().getExtension()))
                        .forChildren(e.getPractitionerEntry().getResource().getQualification().get(0).getCode().getCoding().get(0).getDisplay().contains("Kinder"))
                        .accessibility(getAccessibilityStatus(e.getLocationEntry().getResource().getExtension()))
                        .status(Status.OPEN)
                        .build()
        ));

        return kbvTherapists;

    }

    private String getTitle(NameDto nameDto) {
        String title = null;

        if (nameDto.getPrefix() != null) {
            title = nameDto.getPrefix().toString();
        }
        return title;
    }

    private Accessibility getAccessibilityStatus(List<ExtensionDto> extensions) {
        if (extensions != null) {
            if (accessibilityFull(extensions)) {
                return Accessibility.FULL;
            } else if (accessibilityRestricted(extensions)) {
                return Accessibility.RESTRICTED;
            }
        }
        return Accessibility.NONE;
    }

    private boolean accessibilityFull(List<ExtensionDto> extensions) {
        return extensions.stream().anyMatch(e -> e.getValueCodeableConcept().getCoding().get(0).getDisplay().contains("uneingeschränkt"));
    }

    private boolean accessibilityRestricted(List<ExtensionDto> extensions) {
        return extensions.stream().anyMatch(e -> e.getValueCodeableConcept().getCoding().get(0).getDisplay().contains("gehbehinderte"));
    }

    private String getPhoneNumber(List<TelecomDto> telecomList) {
        String phoneNumber = null;

        if (telecomList != null) {
            for (TelecomDto telecom : telecomList) {
                if (telecom.getSystem().contains("phone")) {
                    phoneNumber = telecom.getValue();
                }
            }

        }
        return phoneNumber;
    }

    private String getEmail(List<TelecomDto> telecomList) {
        String mailAdress = null;

        if (telecomList != null) {
            for (TelecomDto telecom : telecomList) {
                if (telecom.getSystem().contains("email")) {
                    mailAdress = telecom.getValue();
                }
            }

        }
        return mailAdress;
    }

    private String getWebsite(List<TelecomDto> telecomList) {
        String website = null;

        if (telecomList != null) {
            for (TelecomDto telecom : telecomList) {
                if (telecom.getSystem().contains("email")) {
                    website = telecom.getValue();
                }
            }

        }
        return website;
    }

    private List<String> getLanguages(List<ExtensionDto> extensions) {
        List<String> languages = new ArrayList<>();

        if (extensions != null) {
            for (ExtensionDto extensionDto : extensions) {
                languages.add(extensionDto.getValueCodeableConcept().getCoding().get(0).getDisplay());
            }
            return languages;
        }
        return languages;
    }
}
