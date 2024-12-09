package com.petcare.rest.webservices.restful.model;


import java.time.LocalDate;

import lombok.Data;

@Data
public class CommentView {
    Integer commentId;
    
    String commentDescription;

    String fullName;

    LocalDate commentDate;

}
