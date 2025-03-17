package com.example.billing.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.billing.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

 

}
