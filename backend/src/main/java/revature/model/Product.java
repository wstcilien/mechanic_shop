package revature.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private int imgURL;
    @Column
    private String name;
    @Column
    private int rating;
    @Column
    private double price;
    @Column
    @OneToMany
    private List<String> comments;
    @ManyToOne()
    private ShopService shopService;

}
