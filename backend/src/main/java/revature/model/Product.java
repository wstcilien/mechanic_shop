package revature.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "product")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private int imgURL;
    @Column(unique = true)
    private String name;
    @Column
    private int rating;
    @Column
    private double price;
    @Column
    @OneToMany(mappedBy = "product")
    private List<Comments> comments;
    @ManyToOne()
    private ShopService shop;

    public void setRating(){
        int totalRate =0;
       if(comments!=null ){
           if(comments.size()>0){
               for(Comments c: comments){
                   totalRate+=c.getRating();
               }
               this.rating = totalRate/comments.size();
           }
       }
    }
}
