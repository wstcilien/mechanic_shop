package revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import revature.model.Service;

public interface ServiceRepository extends JpaRepository<Service,Integer> {
}