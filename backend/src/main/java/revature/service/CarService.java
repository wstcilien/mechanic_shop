package revature.service;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import revature.model.Car;
import revature.repository.CarRepository;

import java.util.List;

@Component
@Scope("prototype")
public class CarService {
    CarRepository carRepository;
    public CarService(CarRepository carRepository){
        this.carRepository = carRepository;
    }
    public List<Car> findAllCars(){
        return carRepository.findAll();
    }
    public Car addCar(Car car){
        return carRepository.save(car);
    }
    public void delete(int id){
        Car c = carRepository.getById(id);
        carRepository.delete(c);
    }
    public Car findById(int id){
        return carRepository.getById(id);
    }

}

