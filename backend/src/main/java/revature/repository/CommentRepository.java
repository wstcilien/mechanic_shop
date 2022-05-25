package revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import revature.model.Comments;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface CommentRepository extends JpaRepository<Comments,Integer> {
    @Query("from Comments where product_id = :productId ")
    List<Comments> findAllProductComments(int productId);
    @Query("from Comments where product_id = :productId and customer_username = :username")
    Comments getByProductIdAndUsername(int productId, String username);
    Comments save(Comments comments);
}
