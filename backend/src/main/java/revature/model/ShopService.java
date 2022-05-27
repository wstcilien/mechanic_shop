package revature.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="shop")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonIdentityInfo(
        //this is to stop recursive hibernate joins
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class ShopService {
    @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(unique = true)
    private String name;
    @Column
    private String imgURL;
    @Column
    private int rating;
    @Column
    private String type;
    @OneToMany(mappedBy = "shop", fetch = FetchType.EAGER)
    private List<Product> products;

    public void setRating(){
        int totalRating =0;
       if(products!=null){
           if(products.size()>0){
               for(Product p:products){
                   totalRating+=p.getRating();
               }
               this.rating = totalRating/products.size();
           }
       }
    }
}
