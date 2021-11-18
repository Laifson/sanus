package de.sanus.backend.controller;

import de.sanus.backend.model.Therapist;
import de.sanus.backend.service.TherapistService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/search")
public class TherapistSearchController {

    private final TherapistService therapistService;

    public TherapistSearchController(TherapistService therapistService) {
        this.therapistService = therapistService;
    }

    @GetMapping
    public List<Therapist> searchForTherapists(@RequestParam String params) {
        return therapistService.searchTherapists(params);
    }
}
