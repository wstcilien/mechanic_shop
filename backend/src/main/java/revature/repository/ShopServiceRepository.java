package revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import revature.model.ShopService;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface ShopServiceRepository extends JpaRepository<ShopService, Integer> {
    @Query("from ShopService")
    List<ShopService> findAll();

    ShopService save(ShopService shopService);

    @Query("from ShopService where name = :name")
    ShopService findByName(String name);

}
