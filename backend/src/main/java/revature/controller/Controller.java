package revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import revature.model.*;
import revature.service.CarService;

@RestController
public class Controller {
    @Autowired
    CarService carServicev;
    @GetMapping("/")
    public String everyThing(){
        System.out.println(carServicev.findAllCars());
        return "you are getting everything ";
    }
}
