package com.petcare.rest.webservices.restful.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OtpVerificationRequest {
    private String userUserName;
    private String otp;
    private long ts;
}