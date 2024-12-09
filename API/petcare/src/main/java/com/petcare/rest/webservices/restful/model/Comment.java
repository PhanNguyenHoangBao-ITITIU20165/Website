package com.petcare.rest.webservices.restful.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
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
@Table(name="comment")
public class Comment {
    @Id
    @GeneratedValue
    private Integer id;

    private String commentDescription;

    private LocalDate commentDate;

    public LocalDate getCommentDate() {
        return commentDate;
    }

    @ManyToOne
    private Product product;

    @ManyToOne
    private User user;

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", commentDescription='" + commentDescription + '\'' +
                ", commentDate=" + commentDate +
                '}';
    }
}
