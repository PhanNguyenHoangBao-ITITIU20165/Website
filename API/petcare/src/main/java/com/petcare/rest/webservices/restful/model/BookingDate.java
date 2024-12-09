package com.petcare.rest.webservices.restful.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name ="booking")
public class BookingDate {
    @Id
    @GeneratedValue
    Integer id;

    LocalDate Date;

    String phoneNumber;

    String typePet;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name ="user_id")
    User user;
}
