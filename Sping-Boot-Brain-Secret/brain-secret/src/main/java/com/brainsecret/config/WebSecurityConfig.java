//package com.brainsecret.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class WebSecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            //.cors().and() // Enable Cross-Origin Requests
//            .csrf(csrf -> csrf.disable()) // Disable CSRF for API calls
//            .authorizeHttpRequests(auth -> auth
//                .requestMatchers("/api/contact/**").permitAll() // Allow public access to ContactUs API
//                .requestMatchers("/api/newsletter/**").permitAll() // Allow public access to Newsletter API
//                .requestMatchers("/api/payment/**").permitAll() // Allow public access to Payment API
//                .requestMatchers("/api/appointments/**", "/api/sleep/**", "/api/community/**", "/api/users/**", "/api/auth/**").permitAll() // Allow public access to these APIs
//                .anyRequest().authenticated() // Require authentication for all other requests
//            )
//            .formLogin(form -> form.disable()) // Disable default login form
//            .httpBasic(basic -> basic.disable()); // Disable basic authentication
//
//        return http.build();
//        
//    }
//    
//    
//}


//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class WebSecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .cors().and()  // Enable Cross-Origin Requests
//            .csrf().disable() // Disable CSRF (if not using authentication)
//            .authorizeHttpRequests(auth -> auth
//                .requestMatchers("/api/contact/**").permitAll() // Allow public access to ContactUs API
//                .requestMatchers("/api/newsletter/**").permitAll() // Allow public access to Newsletter API
//                .requestMatchers("/api/contact/**", "/api/appointments/**", "/api/sleep/**", "/api/community/**", "/api/users/**").permitAll()// Allow public access to ContactUs & Appointments APIs
//                .anyRequest().authenticated()
//            );
//        
////        .csrf(csrf -> csrf.disable()) // Disable CSRF for API calls
////        .authorizeHttpRequests(auth -> auth
////            .requestMatchers("/api/payment/").permitAll() // ✅ Allow public access to payment API
////            .anyRequest().authenticated() // Require authentication for other requests
////        )
////        .formLogin(form -> form.disable()) // Disable default login form
////        .httpBasic(basic -> basic.disable()); // Disable basic authentication
//        
//        return http.build();
//    }
//}
