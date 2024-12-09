package com.petcare.rest.webservices.restful.model;


import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingDatePosting {

    String username;

    LocalDate localDate;

    String phoneNumber;

    String typePet;
}
