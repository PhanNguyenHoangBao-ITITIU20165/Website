package com.petcare.rest.webservices.restful.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EncodeService {
    public static PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
}
