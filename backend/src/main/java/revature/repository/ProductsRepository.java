package revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import revature.model.Product;
import java.util.List;

import javax.transaction.Transactional;

@Transactional
public interface ProductsRepository extends JpaRepository<Product,Integer> {

    Product save(Product product);

    @Query("from Product")
    List<Product> findAll();
    @Query("from Product where id = :productId")
    Product findById(int productId);
    @Query("from Product where name = :productName")
    Product findByName(String productName);
}
