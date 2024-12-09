package com.petcare.rest.webservices.restful.service;


import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.petcare.rest.webservices.restful.model.Cart;
import com.petcare.rest.webservices.restful.model.CartDTO;
import com.petcare.rest.webservices.restful.model.OrderedProduct;
import com.petcare.rest.webservices.restful.model.Product;
import com.petcare.rest.webservices.restful.model.User;
import com.petcare.rest.webservices.restful.repository.CartRepository;
import com.petcare.rest.webservices.restful.repository.OrderedProductRepository;
import com.petcare.rest.webservices.restful.repository.ProductRepository;
import com.petcare.rest.webservices.restful.repository.UserRepository;


@Service
public class OrderedProductService {

    OrderedProductRepository orderedProductRepository;
    CartRepository cartRepository;
    ProductRepository productRepository;
    UserRepository userRepository;

    //Constructor
    public OrderedProductService(OrderedProductRepository orderedProductRepository, CartRepository cartRepository, ProductRepository productRepository, UserRepository userRepository) {
        this.orderedProductRepository = orderedProductRepository;
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    public List<OrderedProduct> getOrderedProducts(){
        return orderedProductRepository.findAll();
    }

    public OrderedProduct getOrderedProduct(Integer id){
        return orderedProductRepository.findById(id).get();
    }

    public ResponseEntity<String> flushCartItemToOrderedProduct(List<CartDTO> cartDTOList){
        for(CartDTO cartDTO: cartDTOList){
            Cart cart= cartRepository.findById(cartDTO.getCartDTOId()).get();

            Product product= productRepository.findById(cart.getProduct().getId()).get();
            User user= userRepository.findById(cart.getUser().getId()).get();
            LocalDate localDate= LocalDate.now();

            OrderedProduct orderedProduct = new OrderedProduct();

            orderedProduct.setOrderedProductQuantity(cartDTO.getCartDTOQuantity());
            orderedProduct.setOrderedProductDate(Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
            orderedProduct.setProduct(product);
            orderedProduct.setUser(user);

            orderedProductRepository.save(orderedProduct);

            cartRepository.deleteById(cartDTO.getCartDTOId());

        }
        return ResponseEntity.status(HttpStatus.CREATED).body("You have complete your purchase");
    }





}
