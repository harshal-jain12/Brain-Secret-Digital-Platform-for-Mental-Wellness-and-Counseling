//package com.brainsecret.config;
//
//import java.util.Collections;  // ✅ Correct import for Collections
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.ProviderManager;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(UserDetailsService userDetailsService) {
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//        provider.setUserDetailsService(userDetailsService);
//        provider.setPasswordEncoder(passwordEncoder());
//        return new ProviderManager(Collections.singletonList(provider));  // ✅ Fix applied
//    }
//  
//    
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .csrf(csrf -> csrf.disable()) // Disable CSRF for APIs
//            .authorizeHttpRequests(auth -> auth
//                .requestMatchers("/api/auth/**").permitAll() // Allow public access to auth APIs
//                .requestMatchers("/api/admin/**").hasRole("ADMIN") // Only Admins can access admin APIs
//                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN") // Users & Admins can access user APIs
//                .anyRequest().authenticated() // All other endpoints require authentication
//            )
//            .formLogin(form -> form.disable()) // Disable default login form
//            .httpBasic(basic -> basic.disable()); // Disable basic authentication
//
//        return http.build();
//    }
//}


package com.brainsecret.config;

import com.brainsecret.service.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Collections;

@Configuration
public class SecurityConfig {

	private final CustomUserDetailsService customUserDetailsService;

    // ✅ Correct constructor injection
    public SecurityConfig(CustomUserDetailsService customUserDetailsService) {
        this.customUserDetailsService = customUserDetailsService;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(customUserDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return new ProviderManager(Collections.singletonList(provider));
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .requestMatchers("/api/contact/**").permitAll() // Allow public access to ContactUs API
                .requestMatchers("/api/newsletter/**").permitAll() // Allow public access to Newsletter API
                .requestMatchers("/api/payment/**").permitAll() // Allow public access to Payment API
                .requestMatchers("/api/appointments/**", "/api/sleep/**", "/api/community/**", "/api/users/**", "/api/auth/**").permitAll() // Allow public access to these APIs
                .anyRequest().authenticated()
            )
            .formLogin(form -> form.disable())
            .httpBasic(basic -> basic.disable());

        return http.build();
    }
}




//package com.brainsecret.config;
//
//import java.util.Collections;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.ProviderManager;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//import com.brainsecret.repository.UserRepository;
//import com.brainsecret.service.CustomUserDetailsService;  // ✅ Import your custom UserDetailsService
//
//@Configuration
//public class SecurityConfig {
//
//	private final CustomUserDetailsService customUserDetailsService;
//
//    public SecurityConfig(CustomUserDetailsService customUserDetailsService) {
//        this.customUserDetailsService = customUserDetailsService;
//    }
//
//	
//	
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//    
//    @Bean
//    public UserDetailsService userDetailsService(UserRepository userRepository) {
//        return new CustomUserDetailsService(userRepository);
//    }
//
////
////    // ✅ Define a UserDetailsService bean
////    @Bean
////    public UserDetailsService userDetailsService() {
////        return new CustomUserDetailsService();  // Replace with your actual UserDetailsService implementation
////    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(UserDetailsService userDetailsService) {
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//        provider.setUserDetailsService(userDetailsService);
//        provider.setPasswordEncoder(passwordEncoder());
//        return new ProviderManager(Collections.singletonList(provider));
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .csrf(csrf -> csrf.disable()) // Disable CSRF for APIs
//            .authorizeHttpRequests(auth -> auth
//                .requestMatchers("/api/auth/**").permitAll() // Allow public access to auth APIs
//                .requestMatchers("/api/admin/**").hasRole("ADMIN") // Only Admins can access admin APIs
//                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN") // Users & Admins can access user APIs
//                .anyRequest().authenticated() // All other endpoints require authentication
//            )
//            .formLogin(form -> form.disable()) // Disable default login form
//            .httpBasic(basic -> basic.disable()); // Disable basic authentication
//
//        return http.build();
//    }
//}
//







//package com.brainsecret.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//        return authenticationConfiguration.getAuthenticationManager();
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .csrf(csrf -> csrf.disable()) // Disable CSRF
//            .authorizeHttpRequests(auth -> auth
//                .requestMatchers("/api/contact/**").permitAll()
//                .requestMatchers("/api/newsletter/**").permitAll()
//                .requestMatchers("/api/payment/**").permitAll()
//                .requestMatchers("/api/appointments/**", "/api/sleep/**", "/api/community/**", "/api/users/**", "/api/auth/**").permitAll()
//                .anyRequest().authenticated()
//            )
//            .formLogin(form -> form.disable()) // Disable default login form
//            .httpBasic(basic -> basic.disable()); // Disable basic authentication
//
//        return http.build();
//    }
//}
//







//package com.brainsecret.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//        return authenticationConfiguration.getAuthenticationManager();
//    }
//
//
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable()
//            .authorizeRequests()
//            .requestMatchers("/api/newsletter/**").permitAll() // Updated from antMatchers to requestMatchers
//            .anyRequest().authenticated();
//    }
//
//}
