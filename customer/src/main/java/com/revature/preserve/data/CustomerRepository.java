package com.revature.preserve.data;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CustomerRepository extends MongoRepository <Customer, String>{

//    Create and update
    @Override
    <S extends Customer> S save(S s);

//    Retrieve all
    @Override
    List<Customer> findAll();

//    Retrieve by ID
    @Override
    Customer findOne(String id);

//    Delete
    @Override
    void delete(String id);
}
