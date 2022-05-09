package revature.service;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import revature.model.Car;
import revature.model.Customer;
import revature.repository.CustomerRepository;

import java.util.List;
import java.util.Objects;

@Component
@Scope("prototype")
public class CustomerService {
    CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }

    public List<Customer> findAllCustomer(){
        return customerRepository.findAll();
    }
    public Customer findCustomerByName(String firstName){
        return customerRepository.findByName(firstName);
    }
    public Customer findCustomerByUserNameAndPassWord(String userName, String passWord){
        return customerRepository.findByUserNameAndPassWord(userName,passWord);
    }
    public Boolean save(Customer customer){
        try{
            customerRepository.save(customer);
            return true;
        }catch (Exception e){
            return false;
        }
    }
//    public Customer update(Car car, int id){
//        Customer customer = customerRepository.findById(id).get();
//        car.setCustomer(customer);
//        customer.getCars().add(car);
//        return save(customer);
//    }
    public void delete(Customer customer)
    {
        customerRepository.delete(customer);
    }
    public Customer getById(int id){
        return customerRepository.getById(id);
    }
    public Customer signIn(String username,String password){
        Customer customer = findCustomerByUserNameAndPassWord(username,password);
//       System.out.println(customer);
        return Objects.requireNonNullElseGet(customer, Customer::new);
    }
}
