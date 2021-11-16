package de.sanus.backend.controller;

import de.sanus.backend.model.Therapist;
import de.sanus.backend.service.TherapistService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TherapistController {

    private final TherapistService therapistService;

    public TherapistController(TherapistService therapistService) {
        this.therapistService = therapistService;
    }

    @GetMapping
    public List<Therapist> searchForTherapists() {
        return therapistService.searchTherapists();
    }
}
