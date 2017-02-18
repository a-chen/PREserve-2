package com.revature.preserve.service;

import com.revature.preserve.data.Customer;
import com.revature.preserve.data.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private CustomerRepository customerRepository;

    @Autowired
    public void setCustomerRepository(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public <S extends Customer> S save(S s) {
        return customerRepository.save(s);
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public Customer findOne(String id) {
        return customerRepository.findOne(id);
    }

    public void delete(String id) {
        customerRepository.delete(id);
    }
}
