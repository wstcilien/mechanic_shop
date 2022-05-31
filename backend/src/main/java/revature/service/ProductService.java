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
    public Boolean addProduct(List<Product> products, String serviceName){
        ShopService service = shopServiceService.findByName(serviceName);

        if(service!=null){
            for(Product p:products){
                p.setShop(service);
                try{
                    productsRepository.save(p);
                }catch (Exception e){
                    return false;
                }
            }
            return true;
        }else{
            return false;
        }
    }
    public Boolean updateProduct(Product product, String name){
        if(product==null|name==null){
            return false;
        }
        Product p = productsRepository.findByName(name);
        if(product.getPrice()!=null){
            p.setPrice(product.getPrice());
        }
        if(product.getImgURL()!=null){
            p.setImgURL(product.getImgURL());
        }
        if(product.getName()!=null){
            p.setName(product.getName());
        }
        try{
            productsRepository.save(p);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
