package revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import revature.model.Product;
import revature.model.ShopService;
import revature.repository.ShopServiceRepository;

import java.util.ArrayList;
import java.util.List;

@Component
public class ShopServiceService {


    ShopServiceRepository shopServiceRepository;

    public ShopServiceService(ShopServiceRepository shopServiceRepository){
        this.shopServiceRepository = shopServiceRepository;
    }

    public List<ShopService> findAll(){
        return shopServiceRepository.findAll();
    }
    public Boolean save(ShopService shopService){
        try{
            shopServiceRepository.save(shopService);
            return true;
        }catch (Exception e){
            return false;
        }
    }
    public ShopService findByName(String name){
        return shopServiceRepository.findByName(name);
    }

}
