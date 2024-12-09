package com.petcare.rest.webservices.restful.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petcare.rest.webservices.restful.model.Cart;
import com.petcare.rest.webservices.restful.model.Product;
import com.petcare.rest.webservices.restful.model.User;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    Cart findByProductAndUser(Product product, User user);
    void deleteByProductAndUser(Product product, User user);
    List<Cart> findByUser(User user);
}
