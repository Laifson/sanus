package de.sanus.backend.service;

import de.sanus.backend.api.service.TherapistApiService;
import de.sanus.backend.model.Therapist;
import de.sanus.backend.model.enums.Status;
import de.sanus.backend.repo.TherapistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TherapistService {

    private final TherapistRepo therapistRepo;
    private final TherapistApiService therapistApiService;
    private final TherapistApiMapper therapistApiMapper;
    private final IdService idService;

    @Autowired
    public TherapistService(TherapistRepo therapistRepo, TherapistApiService therapistApiService, TherapistApiMapper therapistApiMapper, IdService idService) {
        this.therapistRepo = therapistRepo;
        this.therapistApiService = therapistApiService;
        this.therapistApiMapper = therapistApiMapper;
        this.idService = idService;
    }

//    public List<Therapist> getSearchedTherapists() {
//        return therapistApiMapper.getMappedTherapists();
//    }
//
//    public Therapist addSearchedTherapist(Therapist therapistDto) {
//        therapistApiMapper.mapToTherapist(therapistApiService.filterTherapists()).save();
//    }
//
//    public Therapist addAllSearchedTherapists(Therapist therapistDto) {
//        therapistApiMapper.mapToTherapist(therapistApiService.filterTherapists()).saveAll();
//    }

    public List<Therapist> getSavedTherapists() {
        return therapistRepo.findAll();
    }

    public void deleteSavedTherapist(String id) {
        therapistRepo.deleteById(id);
    }

    public Therapist updateSavedTherapist(Therapist therapistDto) {
        if(therapistRepo.existsById(therapistDto.getId())) {
            Therapist therapist = new Therapist();
            therapist.setId(idService.generateId());
            therapist.setStatus(Status.OPEN);
            return therapistRepo.save(therapist);
        } else {
            throw new NoSuchElementException("Could not update therapist element. Element with id " + therapistDto.getId() + "does not exist.");
        }
    }

}
