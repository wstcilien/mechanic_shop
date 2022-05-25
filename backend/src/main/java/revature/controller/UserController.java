package revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import revature.model.*;
import revature.service.CarService;
import revature.service.CommentService;
import revature.service.CustomerService;

@CrossOrigin("*")
@RestController
public class UserController {

    @Autowired
    CarService carService;
    @Autowired
    CustomerService customerService;
    @Autowired
    CommentService commentService;
    @PostMapping("/SignIn")
    public Customer signIn(@RequestHeader(name = "username") String username,@RequestHeader(name = "password") String password){
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
    @PostMapping("/service/product/addreview")
    public Boolean postReview(@RequestBody Comments comment ,@RequestHeader(name = "productId")int productId){
       return commentService.postComment(comment,productId);
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
