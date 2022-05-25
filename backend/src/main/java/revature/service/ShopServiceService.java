package revature.service;

import org.springframework.stereotype.Component;
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

    public List<List<ShopService>> findAll(){
        List<ShopService> all = shopServiceRepository.findAll();
        List<List<ShopService>> list = new ArrayList<>();
        List<ShopService> ordered = new ArrayList<>();
        List<ShopService> dropOff = new ArrayList<>();
        for(ShopService s:all){
            if(s.getType().equals("dropOff")){
                dropOff.add(s);
            }else{
                ordered.add(s);
            }
        }
        list.add(ordered);
        list.add(dropOff);
        return list;
    }
    public Boolean save(ShopService shopService){
        try{
            shopService.setRating();
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
