package de.sanus.backend.service;

import de.sanus.backend.api.service.TherapistApiService;
import de.sanus.backend.api.service.TherapistApiWrapper;
import de.sanus.backend.model.Therapist;
import de.sanus.backend.repo.TherapistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TherapistService {

    private final KbvApiMapper kbvApiMapper;
    private final TherapistApiService therapistApiService;
    private final TherapistApiWrapper therapistApiWrapper;
    private final TherapistRepo therapistRepo;

    @Autowired
    public TherapistService(KbvApiMapper kbvApiMapper, TherapistApiService therapistApiService, TherapistApiWrapper therapistApiWrapper, TherapistRepo therapistRepo) {
        this.kbvApiMapper = kbvApiMapper;
        this.therapistApiService = therapistApiService;
        this.therapistApiWrapper = therapistApiWrapper;
        this.therapistRepo = therapistRepo;
    }

    public List<Therapist> searchTherapists() {
        return kbvApiMapper.mapToTherapist(therapistApiWrapper.filterEntries(therapistApiService.getTherapists().getEntry()));
    }

    public void addTherapist(Therapist therapist) {
        therapistRepo.save(therapist);
    }

    public void addAllTherapists(List<Therapist> therapistList) {
        therapistRepo.saveAll(therapistList);
    }

    public List<Therapist> getTherapists() {
        return therapistRepo.findAll();
    }

    public void deleteTherapist(String id) {
        therapistRepo.deleteById(id);
    }


}
