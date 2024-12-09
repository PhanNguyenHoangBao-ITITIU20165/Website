package com.petcare.rest.webservices.restful.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.petcare.rest.webservices.restful.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public User findByUserUserNameAndUserPassword(String userUsername, String userPassword);
    public User findByUserUserName(String userUsername);

    public void deleteById(Integer id);
}
