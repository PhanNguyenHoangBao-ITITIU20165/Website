package com.petcare.rest.webservices.restful.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petcare.rest.webservices.restful.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findProductsByProductCategory(String ProductCategory);
}
