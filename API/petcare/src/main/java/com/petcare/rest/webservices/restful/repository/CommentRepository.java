package com.petcare.rest.webservices.restful.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petcare.rest.webservices.restful.model.Comment;
import com.petcare.rest.webservices.restful.model.Product;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    public List<Comment> findByProduct(Product product);


}
