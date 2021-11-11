package de.sanus.backend.api.controller;

import de.sanus.backend.api.dto.PractitionerEntriesDto;
import de.sanus.backend.api.dto.resource.EntryDto;
import de.sanus.backend.api.service.TherapistApiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/search")
public class TherapistSearchController {

    private final TherapistApiService therapistApiService;

    public TherapistSearchController(TherapistApiService therapistApiService) {
        this.therapistApiService = therapistApiService;
    }

    @GetMapping
    @RequestMapping("/therapists")
    public List<EntryDto> searchForCity() {
        return therapistApiService.getTherapists().getEntry();
    }

    @GetMapping
    @RequestMapping("/test")
    public List<PractitionerEntriesDto> searchForTesting() {
        return therapistApiService.wrappingJson();
    }

}
