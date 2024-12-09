package com.petcare.rest.webservices.restful.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petcare.rest.webservices.restful.model.AuthenticationResponse;
import com.petcare.rest.webservices.restful.model.OrderedProductDTO;
import com.petcare.rest.webservices.restful.model.OtpVerificationRequest;
import com.petcare.rest.webservices.restful.model.User;
import com.petcare.rest.webservices.restful.model.UserChangeInformation;
import com.petcare.rest.webservices.restful.service.UserService;

@RestController
@RequestMapping("is/v1")
public class UserController {
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> retrieveUsers(){
        return userService.retrieveUsers();
    }

    @GetMapping("/users/{username}")
    public User getUser(@PathVariable String username){
        return userService.getUserbyUsername(username);
    }
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User userRequest) {
        AuthenticationResponse ok = userService.login(userRequest);
        System.out.println("login is called sth:" + userRequest);
        System.out.println(ok);
        if (ok != null) {
            return ResponseEntity.ok().body(ok);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/users/{username}/{password}")
    public User getUserbyUsernameAndPassword(@PathVariable String username, @PathVariable String password){
        return userService.getUserbyUsernameAndPassword(username,password);
    }

    @PostMapping("/register")
    public ResponseEntity<User> Register(@RequestBody User userRegister) {
        System.out.println("register is called sth:" + userRegister);
        try {
            userService.register(userRegister);
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
        
        return ResponseEntity.ok().build();
    }

    @PostMapping("/resendOtp")
    public ResponseEntity<Boolean> resendOtp(@RequestBody User userRegister) throws Exception {
        try {
            userService.resendOtp(userRegister);
        } catch (Exception e) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping("/verify")
    public ResponseEntity<User> verify(@RequestBody OtpVerificationRequest otpVerificationRequest){
        boolean isVerified = userService.verfifyOtp(otpVerificationRequest);
        if(isVerified){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/users/{username}/orederedProducts")
    public List<OrderedProductDTO> getOrderedProductEachUser(@PathVariable  String username){
        return  userService.getOrderedProductEachUser(username);

    }

    @GetMapping("/user/userChangeInformation/{username}")
    public UserChangeInformation getUserChangeInformation(@PathVariable String username){
        return userService.getUserChangeInformation(username);
    }

    @PutMapping("user/userChangeInformation/update")
    public ResponseEntity<User> ChangeUserInformation(@RequestBody UserChangeInformation
            userChangeInformation)

    {
        System.out.println(userChangeInformation);
        User user = userService.ChangeUserInformation(userChangeInformation);
        if(user != null){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}


