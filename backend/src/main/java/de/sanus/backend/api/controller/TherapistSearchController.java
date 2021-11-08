package de.sanus.backend.api.controller;

import de.sanus.backend.api.dto.psychotherapists.PsychotherapistDTO;
import de.sanus.backend.api.service.PsychotherapistApiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/search")
public class PsychotherapistSearchController {

    private final PsychotherapistApiService psychotherapistApiService;

    public PsychotherapistSearchController(PsychotherapistApiService psychotherapistApiService) {
        this.psychotherapistApiService = psychotherapistApiService;
    }

    @GetMapping
    @RequestMapping("/ort")
    public PsychotherapistDTO searchForCity() {
        return psychotherapistApiService.getPsychotherapists();
    }

}
