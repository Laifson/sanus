package de.sanus.backend.repo;

import de.sanus.backend.model.Therapist;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TherapistRepo extends PagingAndSortingRepository<Therapist, String> {

    List<Therapist> findAll();

}
