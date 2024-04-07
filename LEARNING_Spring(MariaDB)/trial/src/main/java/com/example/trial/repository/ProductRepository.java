package com.example.trial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.trial.entity.Product;

// Product id data type
public interface ProductRepository extends JpaRepository<Product, Integer>{
    Product findByName(String name);
}
