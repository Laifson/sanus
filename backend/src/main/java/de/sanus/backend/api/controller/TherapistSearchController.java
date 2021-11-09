package de.sanus.backend.api.controller;

import de.sanus.backend.api.dto.TherapistDto;
import de.sanus.backend.api.service.TherapistApiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/search")
public class TherapistSearchController {

    private final TherapistApiService therapistApiService;

    public TherapistSearchController(TherapistApiService therapistApiService) {
        this.therapistApiService = therapistApiService;
    }

    @GetMapping
    @RequestMapping("/therapists")
    public TherapistDto searchForCity() {
        return therapistApiService.getPsychotherapists();
    }

}
