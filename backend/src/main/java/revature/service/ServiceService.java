package revature.service;

import org.springframework.stereotype.Component;
import revature.model.Service;
import revature.repository.ServiceRepository;

import java.util.List;

@Component
public class ServiceService {
    ServiceRepository serviceRepository;

    public ServiceService(ServiceRepository serviceRepository){
        this.serviceRepository = serviceRepository;
    }

    public List<Service> findAllServices (){
        return serviceRepository.findAll();
    }
    public Service addService(Service service){
        return serviceRepository.save(service);
    }
    public Service findById(int id){
        return serviceRepository.findById(id).get();
    }
}
