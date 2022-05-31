package revature.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "product")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@JsonIdentityInfo(
        //this is to stop recursive hibernate joins
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private String imgURL;
    @Column(unique = true)
    private String name;
    @Column
    private int rating;
    @Column
    private String price;
    @Column
    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    private List<Comments> comments;
    @Column
    private String description;
    @ManyToOne
    private ShopService shop;

    public int getRating(){
        int totalRate =0;
        if(this.comments!=null ){
            if(this.comments.size()>0){
                for(Comments c: comments){
                    totalRate+=c.getRating();
                }
                totalRate = totalRate/comments.size();
            }
        }
        return totalRate;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", imgURL=" + imgURL +
                ", name='" + name + '\'' +
                ", rating=" + rating +
                ", price='" + price + '\'' +
                ", comments=" + comments +
                ", shop=" + shop.getId() +
                '}';
    }
}
