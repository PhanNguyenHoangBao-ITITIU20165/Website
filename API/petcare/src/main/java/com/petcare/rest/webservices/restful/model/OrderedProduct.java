package com.petcare.rest.webservices.restful.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Table(name= "ordered_product")
public class OrderedProduct {
    @Id
    @GeneratedValue
    private Integer id;

    private Integer orderedProductQuantity;
    
    private Date orderedProductDate;

    @Override
    public String toString() {
        return "OrderedProduct{" +
                "id=" + id +
                ", orderedProductQuantity=" + orderedProductQuantity +
                ", orderedProductDate=" + orderedProductDate +
                ", product=" + product.getId() +
                ", user=" + user.getId() +
                '}';
    }

    @ManyToOne
    @JsonIgnoreProperties({""})
    private Product product;

    @ManyToOne
    @JsonIgnoreProperties({"id"})
    private User user;




}
