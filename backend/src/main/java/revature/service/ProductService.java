package revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import revature.model.Product;
import revature.model.ShopService;
import revature.repository.ProductsRepository;

import java.util.List;


@Component
@Scope("prototype")
public class ProductService {
    @Autowired
    ProductsRepository productsRepository;
    @Autowired
    ShopServiceService shopServiceService;
    public ProductService(ProductsRepository productsRepository){
        this.productsRepository = productsRepository;
    }
    public Product findById(int productId){
        return productsRepository.findById(productId);
    }
    public Boolean addProduct(Product product, String serviceName){
        ShopService service = shopServiceService.findByName(serviceName);

        if(service!=null){
            product.setRating();
            product.setShop(service);
            service.setRating();
            productsRepository.save(product);
            return true;
        }else{
            return false;
        }
    }
}
