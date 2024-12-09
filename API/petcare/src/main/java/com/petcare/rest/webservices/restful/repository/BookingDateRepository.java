package com.petcare.rest.webservices.restful.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petcare.rest.webservices.restful.model.BookingDate;
import com.petcare.rest.webservices.restful.model.User;

public interface BookingDateRepository extends JpaRepository<BookingDate,Integer> {


    List<BookingDate> findByUser(User user);
}
