package revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;
import revature.model.Product;
import revature.model.ShopService;
import revature.service.ProductService;
import revature.service.ShopServiceService;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AdminController {
    @Autowired
    ShopServiceService shopServiceService;
    @Autowired
    ProductService productService;

    @GetMapping("/")
    public List<ShopService>getAllServicesAndProducts(){
        return shopServiceService.findAll();
    }
    @PostMapping("/admin/add/service")
    public Boolean addService(@RequestBody ShopService body){
        return shopServiceService.save(body);
    }
    @PatchMapping("/admin/add/service/product")
    public Boolean addProduct(@RequestBody Product body, @RequestHeader(name = "name")String name){
        return productService.addProduct(body,name);
    }
    @PatchMapping("/admin/update/service")
    public Boolean updateService(@RequestHeader(name = "name") String serviceName,@RequestBody ShopService shopService){
        return shopServiceService.update(serviceName,shopService);
    }
}
