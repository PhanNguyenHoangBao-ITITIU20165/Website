package com.petcare.rest.webservices.restful.service;

import com.petcare.rest.webservices.restful.model.User;
import com.petcare.rest.webservices.restful.repository.UserRepository;
import com.petcare.rest.webservices.restful.security.CustomerUserDetails;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
@Data
public class UserServiceDetails implements UserDetailsService {


    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        // Kiểm tra xem user có tồn tại trong database không?
        User user = userRepository.findByUserUserName(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new CustomerUserDetails(user);
    }


}

