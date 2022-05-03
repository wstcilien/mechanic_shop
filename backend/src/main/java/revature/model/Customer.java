package revature.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Customer")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int id;
    @Column
    private String firstName;
    @Column
    private String LastName;
    @Column
    private Address address;
    @Column
    private String email;
    @Column
    private long number;
    @Column(unique = true)
    private String userName;
    @Column
    private String passWord;
    @OneToMany(mappedBy ="customer", fetch = FetchType.EAGER)
    private List<Car> cars = new ArrayList<>();

    @Override
    public String toString() {
        return "    firstName= " + firstName + " "+ LastName +
                "\n    email= " + email +
                "\n    number= " + number+
                "\n    address= " + address;
    }
}
