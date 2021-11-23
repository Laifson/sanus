package de.sanus.backend.security.repo;

import de.sanus.backend.security.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepo extends PagingAndSortingRepository<AppUser, String> {
}
