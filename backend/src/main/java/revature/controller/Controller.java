package revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import revature.model.*;
import revature.service.CarService;
import revature.service.CustomerService;

import java.util.List;

@CrossOrigin
@RestController
public class Controller {

    @Autowired
    CarService carServicev;
    @Autowired
    CustomerService customerService;

    @PostMapping("/SignIn")
    public Customer signIn(@RequestHeader(name = "username") String username,@RequestHeader(name = "password") String password){
//        System.out.println(username);
        return customerService.signIn(username,password);
    }
    @PostMapping("/Register")
    public Boolean register(@RequestBody Customer customer){
        return customerService.save(customer);
    }
    @PatchMapping("/update/profile")
    public Boolean updateProfile(@RequestBody Customer customer){
        return customerService.save(customer);
    }

//    @PatchMapping("/update/cars")
//    public Boolean updateCars(@RequestHeader(name = "username") String username,@RequestHeader(name = "password")String password,@RequestBody List<Car> cars){
//
//        return true;
//    }
//    @DeleteMapping("/delete/Cars")
//    public Boolean deleteCars(@RequestBody List<Car> cars){
//        return true;
//    }

}
