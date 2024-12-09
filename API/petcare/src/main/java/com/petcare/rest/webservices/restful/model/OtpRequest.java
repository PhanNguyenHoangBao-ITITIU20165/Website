package com.petcare.rest.webservices.restful.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OtpRequest {
    @JsonProperty("userUserName")
    private String userUserName;

    @JsonProperty("userEmail")
    private String userEmail;

    @JsonProperty("otp")
    private String otp;
}