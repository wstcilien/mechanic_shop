package revature.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import revature.model.Car;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface CarRepository extends JpaRepository<Car, Integer> {
    @Query("from Car")
    List<Car> findAll();


//    @Query("insert into Car (make,model,year,customer_id) values(':make',':model',:year,:id)")
//    Car addCar(String make,String model,int year,int id);
}
