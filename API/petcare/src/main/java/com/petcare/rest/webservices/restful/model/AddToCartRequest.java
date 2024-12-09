package com.petcare.rest.webservices.restful.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddToCartRequest {
    private Integer cartItemQuantity;

    private Integer productId;

    private String username;
}