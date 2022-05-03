package revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import revature.model.Customer;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Query("from Customer")
    List<Customer> findAll();
    //
    Customer save(Customer customer);


//    Customer delete(Customer customer);


//    @Query("insert into Car (make,model,year,customer_id) values(:make,:model,:year,:id")
//    Customer addCar(String make,String model,int year,int id);

    @Query("from Customer where firstName = :firstName")
    Customer findByName(String firstName);

    @Query("from Customer where user_name = :username and pass_word = :password")
    Customer findByUserNameAndPassWord(String username, String password);


}