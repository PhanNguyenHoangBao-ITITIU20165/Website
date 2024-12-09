package com.petcare.rest.webservices.restful.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import lombok.Data;

@Configuration
@Data
public class EmailConfig {
    @Value("${spring.mail.host}")
    private String HOST_NAME;

    @Value("${spring.mail.port}")
    private String PORT;

    @Value("${spring.mail.username}")
    private String USERNAME;

    @Value("${spring.mail.password}")
    private String PASSWORD;

    @Value("${spring.mail.properties.mail.smtp.auth}")
    private String AUTH;

    @Value("${spring.mail.properties.mail.smtp.starttls.enable}")
    private String START_TLS;
}