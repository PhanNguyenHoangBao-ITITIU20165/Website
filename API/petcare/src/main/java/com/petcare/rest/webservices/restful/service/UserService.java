package com.petcare.rest.webservices.restful.service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.petcare.rest.webservices.restful.model.AuthenticationResponse;
import com.petcare.rest.webservices.restful.model.OrderedProduct;
import com.petcare.rest.webservices.restful.model.OrderedProductDTO;
import com.petcare.rest.webservices.restful.model.OtpRequest;
import com.petcare.rest.webservices.restful.model.OtpVerificationRequest;
import com.petcare.rest.webservices.restful.model.User;
import com.petcare.rest.webservices.restful.model.UserChangeInformation;
import com.petcare.rest.webservices.restful.repository.OrderedProductRepository;
import com.petcare.rest.webservices.restful.repository.ProductRepository;
import com.petcare.rest.webservices.restful.repository.UserRepository;
import com.petcare.rest.webservices.restful.security.CustomerUserDetails;
import com.petcare.rest.webservices.restful.security.JwtTokenProvider;

@Service 
public class UserService {

    UserRepository userRepository;
    OrderedProductRepository OrderedProductRepository;
    ProductRepository productRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    EmailSenderService emailService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    // Constructor




    public UserService(UserRepository userRepository, OrderedProductRepository orderedProductRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        OrderedProductRepository = orderedProductRepository;
        this.productRepository = productRepository;
    }

    public List<User> retrieveUsers(){
        return userRepository.findAll();
    }

    public User getUser(Integer id){
        return  userRepository.findById(id).get();
    }

    public User getUserbyUsernameAndPassword(String username, String password){
        User user = userRepository.findByUserUserNameAndUserPassword(username,password);
        return user;
    }

     public AuthenticationResponse login(@RequestBody User userRequest) {
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            userRequest.getUserUserName(),
                            userRequest.getUserPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user = userRepository.findByUserUserName(userRequest.getUserUserName());
            
            if(user == null || user.getIsVerified() == false){
                return null;
            }

            String jwt = jwtTokenProvider.generateToken((CustomerUserDetails) authentication.getPrincipal());
        
            return new AuthenticationResponse(jwt);
        }catch (Exception e){
            return null;
        }

    }
    
    public User register(@RequestBody User user) throws RuntimeException {
         // save a OTP version to db
        // then response an version without otp
        User savedUser = userRepository.findByUserUserName(user.getUserUserName());
        if(savedUser == null) {
            String otp = getOtp();
        
            user.setOtp(Base64.getEncoder().withoutPadding().encodeToString(otp.getBytes()));
            user.setOtpTS(getOtpTS());
            user.setVerified(false);
            user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
            userRepository.save(user);

            emailService.sendEmail(new OtpRequest(user.getUserUserName(), user.getUserEmail(), otp));

            System.out.println("User saved");

            return user;
        } else if(savedUser.getIsVerified() == false) {
            resendOtp(savedUser);
            return savedUser;

        } else {
            throw new RuntimeException("User already exists");
        } 
    }

    public User resendOtp(@RequestBody User user) throws RuntimeException {
        User savedUser = userRepository.findByUserUserName(user.getUserUserName());
        if(savedUser == null) {
            throw new RuntimeException("User not found");
        }

        String otp = getOtp();

        savedUser.setOtp(Base64.getEncoder().withoutPadding().encodeToString(otp.getBytes()));
        
        savedUser.setOtpTS(getOtpTS());
        
        savedUser.setVerified(false);
        userRepository.deleteById(savedUser.getId());

        userRepository.save(savedUser);
        emailService.sendEmail(new OtpRequest(user.getUserUserName(), user.getUserEmail(), otp));
        return savedUser;
    }

    public boolean verfifyOtp(@RequestBody OtpVerificationRequest otpVerificationRequest) {
        User user = userRepository.findByUserUserName(otpVerificationRequest.getUserUserName());
        otpVerificationRequest.setOtp(Base64.getEncoder().withoutPadding().encodeToString(otpVerificationRequest.getOtp().getBytes()));

        if(user != null) {
            if(user.getOtp().equals(otpVerificationRequest.getOtp())) {
                long otpTS = user.getOtpTS();
                long now = getOtpTS();

                // set expiration time 5 minutes
                if(now - otpTS < 5 * 60 * 1000) {
                    user.setVerified(true);
                    userRepository.save(user);
                    return true;
                }
            }
        }
        return false;
    }

    public List<OrderedProductDTO> getOrderedProductEachUser(String username){
        User user= userRepository.findByUserUserName(username);
        List<OrderedProductDTO> orderedProductDTOS = new ArrayList<>();
        for(OrderedProduct orderedProduct : user.getOrderedProductsList()){
            OrderedProductDTO orderedProductDTO = new OrderedProductDTO();

            orderedProductDTO.setProductId(orderedProduct.getProduct().getId());
            orderedProductDTO.setOrderedProductId(orderedProduct.getId());
            orderedProductDTO.setOrderedProductDate(new Date());
            orderedProductDTO.setOrderedProductDTOProductName(orderedProduct.getProduct().getProductName());
            orderedProductDTO.setOrderedProductDTOQuantity(orderedProduct.getOrderedProductQuantity());
            orderedProductDTO.setOrderedProductDTOCategory(orderedProduct.getProduct().getProductCategory());
            orderedProductDTO.setOrderedProductDTOPrice(orderedProduct.getProduct().getProductPrice());
            orderedProductDTO.setOrderedProductDTOImageUrl(orderedProduct.getProduct().getProductImageUrl());

            orderedProductDTOS.add(orderedProductDTO);

        }
        return orderedProductDTOS;


    }

    public User getUserbyUsername(String username){
        User user = userRepository.findByUserUserName(username);
        return user;
    }

    public UserChangeInformation getUserChangeInformation(String username){
        User user = getUserbyUsername(username);
        if(user != null){
            UserChangeInformation userChangeInformation = new UserChangeInformation();
            userChangeInformation.setUserId(user.getId());
            userChangeInformation.setUsername(user.getUserUserName());
            userChangeInformation.setEmail(user.getUserEmail());
            userChangeInformation.setFullName(user.getUserFullName());

            return userChangeInformation;
        }
        return null;

    }

    public User ChangeUserInformation(UserChangeInformation userChangeInformation){
        User user = userRepository.findByUserUserName(userChangeInformation.getUsername());

        if( user != null  && checkAuthenticate(userChangeInformation.getUsername(), userChangeInformation.getCurrentPassword())){
            user.setUserFullName(userChangeInformation.getFullName());
            user.setUserPassword(passwordEncoder.encode(userChangeInformation.getPassword()));
            user.setUserEmail(userChangeInformation.getEmail());
            userRepository.save(user);
            return user;
        }
        return null;
    }

    private String getOtp() {
        List<String>digits = new ArrayList<>(Arrays.asList("0","1","2","3","4","5","6","7","8","9"));

        String res = "";

        for(int i = 1; i <= 6; i++) {
            int index = (int)(Math.random() * digits.size());
            res += digits.get(index);
        }

        return res;
    }

    private long getOtpTS() {
        Instant instant = Instant.now();  
        long timeStampMillis = instant.toEpochMilli();
        return timeStampMillis;
    }

    private boolean checkAuthenticate(String username, String password) {
        System.out.println("password" + password);
         try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            username,
                            password
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user = userRepository.findByUserUserName(username);
            
            if(user == null || user.getIsVerified() == false){
                return false;
            }
            return true;
        
        }catch (Exception e){
            return false;
        }
    }

}
