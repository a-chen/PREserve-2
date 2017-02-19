package com.revature.preserve.controllers;

import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class CustomerController {

    private static final Logger log = LoggerFactory.getLogger(CustomerController.class);

    @Autowired
    private EurekaClient discoveryClient;

    public void stuff() {
        Application customerApplication = discoveryClient.getApplication("customer");

    }


}
