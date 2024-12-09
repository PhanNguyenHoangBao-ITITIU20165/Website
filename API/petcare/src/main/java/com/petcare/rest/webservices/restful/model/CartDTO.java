package com.petcare.rest.webservices.restful.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartDTO {
    private Integer cartDTOId;

    private String cartDTOName;

    private Integer cartDTOQuantity;

    private String cartDTOCategory;

    private Float cartDTOPrice;

    private String cartDTOImageUrl;

    // @Override
    // public String toString() {
    //     return "CartDTO{" +
    //             "cartDTOId=" + cartDTOId +
    //             ", cartDTOName='" + cartDTOName + '\'' +
    //             ", cartDTOQuantity=" + cartDTOQuantity +
    //             ", cartDTOCategory='" + cartDTOCategory + '\'' +
    //             ", cartDTOPrice=" + cartDTOPrice +
    //             ", cartDTOImageUrl='" + cartDTOImageUrl + '\'' +
    //             '}';
    // }
}
