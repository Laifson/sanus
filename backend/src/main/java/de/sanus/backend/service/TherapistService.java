package de.sanus.backend.service;

import de.sanus.backend.api.service.TherapistApiService;
import de.sanus.backend.model.Therapist;
import de.sanus.backend.repo.TherapistRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class TherapistService {

    private final KbvApiMapper kbvApiMapper;
    private final TherapistApiService therapistApiService;
    private final TherapistRepo therapistRepo;

    public TherapistService(TherapistRepo therapistRepo, KbvApiMapper kbvApiMapper, TherapistApiService therapistApiService) {
        this.therapistRepo = therapistRepo;
        this.kbvApiMapper = kbvApiMapper;
        this.therapistApiService = therapistApiService;

    }

    public List<Therapist> searchTherapists(String params) {
        return kbvApiMapper.mapToTherapist(therapistApiService.filterEntries(params));
    }

    public Iterable<Therapist> addAllTherapists(Iterable<Therapist> therapistList) {
        return therapistRepo.saveAll(therapistList);
    }

    public Therapist addOneTherapist(Therapist therapist) {
        return therapistRepo.save(therapist);
    }

    public List<Therapist> getTherapists() {
        return therapistRepo.findAll();
    }

    public Therapist getTherapist(String id) {
        Optional<Therapist> optionalTherapist = therapistRepo.findById(id);
        if (optionalTherapist.isPresent()) {
            return optionalTherapist.get();
        } else {
            throw new NoSuchElementException("Therapist with id not found: " + id);
        }
    }

    public Therapist updateTherapist(Therapist therapist) {
        if(therapistRepo.existsById(therapist.getId())) {
            return therapistRepo.save(therapist);
        } else {
            throw new NoSuchElementException("Could not update element! Element with id does not exist: " + therapist.getId());
        }
    }

    public void deleteTherapist(String id) {
        therapistRepo.deleteById(id);
    }

}
