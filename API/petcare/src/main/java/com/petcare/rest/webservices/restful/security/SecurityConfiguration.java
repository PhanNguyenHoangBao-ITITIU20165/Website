package com.petcare.rest.webservices.restful.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity

public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        httpSecurity
//                .csrf(crsf -> {
//                    crsf.ignoringRequestMatchers("/is/v1/register",
//                            "/is/v1/login",
//                            "/is/v1/resendOtp",
//                            "/is/v1/verify",
//                            "/is/v1/api-docs/**",
//                            "/is/v1/swagger-ui/**");
//                })
                .csrf().disable()
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/is/v1/register").permitAll()
                        .requestMatchers("/is/v1/login").permitAll()
                        .requestMatchers("/is/v1/resendOtp").permitAll()
                        .requestMatchers("/is/v1/verify").permitAll()
                        .requestMatchers("/is/v1/api-docs/**").permitAll()
                        .requestMatchers("/is/v1/swagger-ui/**").permitAll()
                        .requestMatchers("/api/v2/admin").hasAnyAuthority("ADMIN")
                        .requestMatchers(HttpMethod.OPTIONS,"/**")
                        .permitAll()
                        .anyRequest()
                        .authenticated())

                .sessionManagement(session -> session.
                        sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }


}
