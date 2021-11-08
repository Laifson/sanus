package de.sanus.backend.repo;

import de.sanus.backend.model.Psychotherapist;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PsychotherapistRepo extends PagingAndSortingRepository<Psychotherapist, String> {

}
