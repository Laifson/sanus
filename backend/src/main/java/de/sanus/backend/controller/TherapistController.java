package de.sanus.backend.controller;

import de.sanus.backend.service.TherapistService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("psy")
public class TherapistController {

    private final TherapistService therapistService;

    public TherapistController(TherapistService therapistService) {
        this.therapistService = therapistService;
    }

//    @GetMapping
//    public List<Psychotherapist> getPsychotherapists() {
//        return psychotherapistService.getPsychotherapists();
//    }
}
