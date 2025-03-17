package com.example.billing.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.billing.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
