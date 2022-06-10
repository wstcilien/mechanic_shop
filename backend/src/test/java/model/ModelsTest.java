package model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import revature.model.*;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class ModelsTest {
    Customer customer;
    List<Car> cars;
    List<Service> services;
    Address address;
    Service service;
    Car car;
    Comments comments;
    Product product;
    SecurePassword securePassword;
    ShopService shopService;

    @BeforeEach
    void setCustomer(){
        customer = new Customer();
        cars = new ArrayList<>();
        car = new Car(1,"Nissan","Altima",2003,customer,services);
        service = new Service(3,"COMPLETED","Jojo","06/09/2022","Fixed Brake",car,50);
        services = new ArrayList<>();
        services.add(service);
        car.setService(services);
        address = new Address("64 Dietz st","Central Islip","New York",11722);
//        System.out.println(customer);
        customer.setAddress(address);
        customer.setFirstName("Walter Darby");
        customer.setLastName("St Cilien");
        customer.setEmail("walterdarby.stcilien@gmail.com");
        cars.add(car);
        customer.setCars(cars);
        customer.setId(2);
        customer.setNumber(3478987246L);
        customer.setUserName("wstcilien");
        customer.setPassWord("12345");
    }
    @Test
    void testAddress(){
        assertNotNull(customer.getAddress());
        String newStreet = "60 Forest Ave";
        customer.getAddress().setStreet(newStreet);
        assertEquals(customer.getAddress().getStreet(),newStreet);
        assertEquals(customer.getAddress().getState(),"New York");
        assertEquals(customer.getAddress().getCity(),"Central Islip");
        assertEquals(customer.getAddress().getZipCode(),11722);
    }
    @Test
    void testCustomer(){
        assertNotNull(customer);
        assertEquals(customer.getFirstName(),"Walter Darby");
        customer.setFirstName("Darby");
        assertEquals(customer.getFirstName(),"Darby");
        assertEquals(customer.getLastName(),"St Cilien");
        assertEquals(customer.getId(),2);
        assertEquals(customer.getEmail(),"walterdarby.stcilien@gmail.com");
        long number = 3478987246L;
        assertEquals(customer.getNumber(),number);
        assertEquals(customer.getPassWord(),"12345");
        assertEquals(customer.getUserName(),"wstcilien");
        assertNull(customer.getToken());
    }
    @Test
    void testCars(){
        assertNotNull(customer.getCars());
        Car car = customer.getCars().get(0);
        assertEquals(car.getCustomer(),customer);
        assertEquals(car.getId(),1);
        assertEquals(car.getMake(),"Nissan");
        assertEquals(car.getModel(),"Altima");
        assertEquals(car.getYear(),2003);
    }
    @Test
    void testService(){
        Service service = customer.getCars().get(0).getService().get(0);
        assertNotNull(service);
        assertEquals(service.getService_id(),3);
        assertEquals(service.getCar(),car);
        assertEquals(service.getComment(),"Fixed Brake");
        assertEquals(service.getDate(),"06/09/2022");
        assertEquals(service.getCost(),50);
        assertEquals(service.getMechanic(),"Jojo");
        assertEquals(service.getStatus(),"COMPLETED");
    }
    void testComments(){

    }
    void testProduct(){

    }
    void testSecurePassword(){

    }
    void testShopService(){

    }
}
