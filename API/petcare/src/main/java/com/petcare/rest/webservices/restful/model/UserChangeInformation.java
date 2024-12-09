package com.petcare.rest.webservices.restful.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserChangeInformation {

    private Integer userId;

    private String username;

    private String password;

    private String currentPassword;

    private String email;

    private String fullName;
}
