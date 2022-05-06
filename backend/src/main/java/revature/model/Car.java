package revature.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Car")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(
        //this is to stop recursive hibernate joins
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class  Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private String make;
    @Column
    private String model;
    @Column
    private int year;
    @ManyToOne
    private Customer customer;
    @OneToMany(mappedBy = "car")
    private List<Service> service;

    @Override
    public String toString() {
        return  "    id= " + id +
                "    make= " + make +
                "    model= " + model +
                "     year= " + year;
    }
}
