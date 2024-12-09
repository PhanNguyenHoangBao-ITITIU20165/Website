package com.petcare.rest.webservices.restful.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.petcare.rest.webservices.restful.config.EmailConfig;

import jakarta.mail.Authenticator;
import jakarta.mail.PasswordAuthentication;

@Component
public class SmtpAuthenticator extends Authenticator {
    @Autowired
    private EmailConfig emailConfig;

    public SmtpAuthenticator() {
        super();
    }
    
    @Override
    protected PasswordAuthentication getPasswordAuthentication() {
        String username = emailConfig.getUSERNAME();
        String password = emailConfig.getPASSWORD();
        if ((username != null) && (username.length() > 0) && (password != null) 
        && (password.length   () > 0)) {
            return new PasswordAuthentication(username, password);
        }

        return null;
    }

    
}