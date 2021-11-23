package de.sanus.backend.controller;

import de.sanus.backend.model.Therapist;
import de.sanus.backend.service.TherapistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/therapist")
public class TherapistController {

    private final TherapistService therapistService;

    public TherapistController(TherapistService therapistService) {
        this.therapistService = therapistService;
    }

    @GetMapping
    public List<Therapist> getTherapists() {
        return therapistService.getTherapists();
    }

    @GetMapping("{id}")
    public Therapist getTherapist(@PathVariable String id) {
        return therapistService.getTherapist(id);
    }

    @PostMapping
    public Iterable<Therapist> addAllTherapists(@RequestBody Iterable<Therapist> therapists) {
        return therapistService.addAllTherapists(therapists);
    }

    @PostMapping("/one")
    public Therapist addOneTherapist(@RequestBody Therapist therapist) {
        return therapistService.addOneTherapist(therapist);
    }

    @PutMapping("{id}")
    public Therapist updateTherapist(@PathVariable String id, @RequestBody Therapist therapist) {
        if(!id.equals(therapist.getId())){
            throw new IllegalArgumentException("Could not update element! Path id does not match with element id in request body!");
        }

        return therapistService.updateTherapist(therapist);
    }

    @DeleteMapping("{id}")
    public void deleteTherapist(@PathVariable String id) {
        therapistService.deleteTherapist(id);
    }

}
