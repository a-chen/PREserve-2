package com.revature.preserve.web;

import com.revature.preserve.data.Customer;
import com.revature.preserve.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    private CustomerService customerService;

    @Autowired
    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

    //    Save/Update Customer
    @RequestMapping(
            value = "/customer",
            method = RequestMethod.POST)
    public Customer save(@RequestBody Customer customer) {
        return customerService.save(customer);
    }

    //    Get all Customers
    @RequestMapping(
            value = "/customer",
            method = RequestMethod.GET)
    public List<Customer> findAll() {
        return customerService.findAll();
    }

    //    Get Customer by ID
    @RequestMapping(
            value = "/customer/{id}",
            method = RequestMethod.GET)
    public Customer findOne(@PathVariable String id) {
        return customerService.findOne(id);
    }

    //    Delete Customer by ID
    @RequestMapping(
            value = "/customer/{id}",
            method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
        customerService.delete(id);
    }
}
