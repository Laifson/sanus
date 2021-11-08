package de.sanus.backend.controller;

import de.sanus.backend.model.Psychotherapist;
import de.sanus.backend.service.PsychotherapistService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("psy")
public class PsychotherapistController {

    private final PsychotherapistService psychotherapistService;

    public PsychotherapistController(PsychotherapistService psychotherapistService) {
        this.psychotherapistService = psychotherapistService;
    }

//    @GetMapping
//    public List<Psychotherapist> getPsychotherapists() {
//        return psychotherapistService.getPsychotherapists();
//    }
}
