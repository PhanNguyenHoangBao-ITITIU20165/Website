package com.petcare.rest.webservices.restful.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.petcare.rest.webservices.restful.model.CartDTO;
import com.petcare.rest.webservices.restful.model.OrderedProduct;
import com.petcare.rest.webservices.restful.service.OrderedProductService;

@RestController
@RequestMapping("is/v1")
public class OrderedProductController {
    OrderedProductService orderedProductService;

    public OrderedProductController(OrderedProductService orderedProductService) {
        this.orderedProductService = orderedProductService;
    }

    @GetMapping("/orderedproducts")
    public List<OrderedProduct> getAllOrderedProduct(){
        return orderedProductService.getOrderedProducts();
    }

    @GetMapping("/orderedproduct/{id}")
    public OrderedProduct getOrderedProduct(@PathVariable Integer id){
        return orderedProductService.getOrderedProduct(id);
    }

    @PatchMapping("/orderedproduct/checkout")
    public ResponseEntity<String> flushCartItemToOrderedProduct(@RequestBody List<CartDTO> cartDTOList){
        return orderedProductService.flushCartItemToOrderedProduct(cartDTOList);
    }






}
