package com.petcare.rest.webservices.restful.model;

import java.util.Date;

import lombok.Data;


@Data
public class OrderedProductDTO {
    private Integer orderedProductId;
    private Integer productId;
    private Date orderedProductDate;
    private String orderedProductDTOProductName;
    private Integer orderedProductDTOQuantity;
    private String orderedProductDTOCategory;
    private Float orderedProductDTOPrice;
    private String orderedProductDTOImageUrl;
}
