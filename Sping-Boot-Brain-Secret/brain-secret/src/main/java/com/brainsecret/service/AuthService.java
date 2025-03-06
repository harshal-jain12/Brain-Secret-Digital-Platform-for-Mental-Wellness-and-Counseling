package com.brainsecret.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.brainsecret.entity.User;
import com.brainsecret.repository.UserRepository;

import java.util.Optional;
import java.util.Date;
import java.util.List;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private static final String SECRET_KEY = "your_secret_key";
    private static final long EXPIRATION_TIME = 86400000; // 24 hours

    // Register a new user
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Generate JWT Token
    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("role", user.getRole())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    // Validate JWT Token
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (ExpiredJwtException e) {
            System.err.println("Token expired: " + e.getMessage());
        } catch (SignatureException | MalformedJwtException e) {
            System.err.println("Invalid token: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Token validation error: " + e.getMessage());
        }
        return false;
    }

    // Extract user details from token
    public Claims extractClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    // Authenticate user and generate token if valid
    public String login(String email, String password) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return generateToken(user);
            }
        }
        throw new RuntimeException("Invalid email or password");
    }
    
 // Add this method to AuthService.java
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    
}


//
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.brainsecret.dto.LoginDTO;
//import com.brainsecret.dto.SignupDTO;
//import com.brainsecret.entity.User;
//import com.brainsecret.repository.UserRepository;
//
//@Service
//public class AuthService {
//
//    private final UserRepository userRepository;
//    private final BCryptPasswordEncoder passwordEncoder;
//
//    public AuthService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = new BCryptPasswordEncoder();
//    }
//
//    // Registration method
//    public String registerUser(SignupDTO signupDTO) {
//        // Check if the user is already registered
//        if (signupDTO == null || signupDTO.getEmail() == null) {
//            throw new IllegalArgumentException("Signup information is invalid.");
//        }
//
//        if (userRepository.findByEmail(signupDTO.getEmail()).isPresent()) {
//            throw new RuntimeException("Email already registered!");
//        }
//
//        // Create a new User object and populate it with data
//        User user = new User();
//        user.setName(signupDTO.getName());
//        user.setEmail(signupDTO.getEmail());
//        user.setPassword(passwordEncoder.encode(signupDTO.getPassword()));
//        user.setRole(signupDTO.getRole());  // Ensure the role is set in the DTO
//
//        // Save the user in the database
//        userRepository.save(user);
//        return "User registered successfully!";
//    }
//
//    // Login method
//    public User login(LoginDTO loginDTO) {
//        if (loginDTO == null || loginDTO.getEmail() == null) {
//            throw new IllegalArgumentException("Invalid login information.");
//        }
//
//        // Find user by email
//        User user = userRepository.findByEmail(loginDTO.getEmail())
//            .orElseThrow(() -> new RuntimeException("Invalid email or password"));
//
//        // Verify password
//        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
//            throw new RuntimeException("Invalid email or password");
//        }
//
//        return user;
//    }
//}
