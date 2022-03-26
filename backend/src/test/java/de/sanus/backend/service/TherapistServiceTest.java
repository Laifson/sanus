package de.sanus.backend.service;

import de.sanus.backend.api.service.TherapistApiService;
import de.sanus.backend.model.Therapist;
import de.sanus.backend.model.enums.Status;
import de.sanus.backend.repo.TherapistRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class TherapistServiceTest {

    TherapistRepo therapistRepo = mock(TherapistRepo.class);
    KbvApiMapper kbvApiMapper = mock(KbvApiMapper.class);
    TherapistApiService therapistApiService = mock(TherapistApiService.class);
    TherapistService therapistService = new TherapistService(therapistRepo, kbvApiMapper, therapistApiService);

    @Test
    void searchTherapists() {
    }

    @Test
    void updateTherapist() {
        // GIVEN
        Therapist therapistToUpdate = new Therapist();
        therapistToUpdate.setId("123ABC");
        therapistToUpdate.setFirstName("Inga");
        therapistToUpdate.setLastName("Blumenbeet");
        therapistToUpdate.setStatus(Status.OPEN);

        Therapist therapistToSave = new Therapist();
        therapistToSave.setId("123ABC");
        therapistToSave.setFirstName("Inga");
        therapistToSave.setLastName("Blumenbeet");
        therapistToSave.setStatus(Status.OPEN);

        Therapist updatedTherapist = new Therapist();
        updatedTherapist.setId("123ABC");
        updatedTherapist.setFirstName("Inga");
        updatedTherapist.setLastName("Blumenbeet");
        updatedTherapist.setStatus(Status.WAITLIST);

        when(therapistRepo.existsById(any())).thenReturn(true);
        when(therapistRepo.save(any())).thenReturn(updatedTherapist);

        // WHEN
        Therapist actual = therapistService.updateTherapist(therapistToUpdate);

        // THEN
        verify(therapistRepo).save(therapistToSave);
        assertThat(actual, is(updatedTherapist));
    }

    @Test
    void updateTherapist_elementNotFound() {
        // GIVEN
        Therapist therapistToUpdate = new Therapist();
        therapistToUpdate.setId("123ABC");
        therapistToUpdate.setFirstName("Inga");
        therapistToUpdate.setLastName("Blumenbeet");
        therapistToUpdate.setStatus(Status.OPEN);

        when(therapistRepo.existsById("123ABC")).thenThrow(NoSuchElementException.class);

        // WHEN
        Assertions.assertThrows(NoSuchElementException.class, () -> {
            therapistService.updateTherapist(therapistToUpdate);
        });
    }
}