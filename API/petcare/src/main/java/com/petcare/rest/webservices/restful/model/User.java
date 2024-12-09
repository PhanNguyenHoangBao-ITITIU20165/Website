package com.petcare.rest.webservices.restful.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="userr")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(unique = true)
    private String  userUserName;

    private  String userFullName;

    private String userPassword;

    private  String userEmail;

    private String userRole;

    @Column(nullable =  true)
    private String otp;

    @Column(nullable =  true, columnDefinition = "bigint default 0")
    private long otpTS;

    @Column(nullable =  true , columnDefinition = "boolean default false")
    private boolean isVerified = false;

    public boolean getIsVerified() {
        return isVerified;
    }

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Cart> cartList;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderedProduct> orderedProductsList;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Comment> comments;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<BookingDate> bookingDates;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userUserName='" + userUserName + '\'' +
                ", userFullName='" + userFullName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userRole='" + userRole + '\'' +
                ", otp='" + otp + '\'' +
                ", otpTS=" + otpTS +
                ", isVerified=" + isVerified +
                '}';
    }
}