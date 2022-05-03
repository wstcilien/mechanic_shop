package revature.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    private String street;
    private String city;
    private String state;
    private int zipCode;

    @Override
    public String toString() {
        return street+
                " " + city +
                ", " + state+
                " " + zipCode;
    }
}
