package com.petcare.rest.webservices.restful.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petcare.rest.webservices.restful.model.OrderedProduct;
import com.petcare.rest.webservices.restful.model.User;

public interface OrderedProductRepository extends JpaRepository<OrderedProduct, Integer> {
     List<OrderedProduct> findByUser(User user);
}
