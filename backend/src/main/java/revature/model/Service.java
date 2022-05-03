package revature.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Entity
@Table(name="Service")
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int service_id;
    @Column
    private String status;
    @Column
    private String mechanic;
    @Column
    private String date;
    @Column
    private String comment;
    @ManyToOne
    @Autowired
    private Car car;
    @Column
    private double cost;

    @Override
    public String toString() {
        return "    date= " + date +
                "car=" + car +
                ", mechanic='" + mechanic + '\'' +

                ", comment='" + comment + '\'' +

                ", cost=" + cost +
                '}';
    }
}
