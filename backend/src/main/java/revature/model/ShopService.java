package revature.model;

import lombok.AllArgsConstructor;
import lombok.Data;
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
public class ShopService {
    @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private String name;
    @Column
    private int imgURL;
    @Column
    private int rating;
    @Column
    private String type;
    @ManyToOne()
    private List<Product> products;
}
