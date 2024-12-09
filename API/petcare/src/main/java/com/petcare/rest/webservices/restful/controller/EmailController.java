package com.petcare.rest.webservices.restful.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.petcare.rest.webservices.restful.service.EmailSenderService;

@RestController
public class EmailController {
    @Autowired
    EmailSenderService emailSenderService;
    
    // @PostMapping("/sendemail")
    // public ResponseEntity<String> SendEmail(@RequestBody OtpRequest otpRequest) {
    //     return emailSenderService.sendEmail(otpRequest);
    // }
}