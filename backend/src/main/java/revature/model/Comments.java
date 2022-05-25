package revature.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Comments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(unique = true)
    private String customerUsername;
    @Column()
    private String review;
    @Column
    private int rating;
    @ManyToOne
    private Product product;

//    public boolean contains(int id){
//
//    }
}
