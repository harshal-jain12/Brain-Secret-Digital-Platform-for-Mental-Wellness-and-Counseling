//package com.brainsecret.service;
//
//import com.brainsecret.entity.User;
//import com.brainsecret.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//import java.util.Optional;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.Claims;
//import java.util.Date;
//import java.util.List;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;
//
//    private static final String SECRET_KEY = "your_secret_key"; // Change to a secure key
//    private static final long EXPIRATION_TIME = 86400000; // 24 hours
//
//    // Register a new user
//    public User registerUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userRepository.save(user);
//    }
//
//    // Generate JWT Token
//    public String generateToken(User user) {
//        return Jwts.builder()
//                .setSubject(user.getEmail())
//                .claim("role", user.getRole())
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
//                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
//                .compact();
//    }
//
//    // Validate JWT Token
//    public boolean validateToken(String token) {
//        try {
//            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
//            return true;
//        } catch (Exception e) {
//            return false;
//        }
//    }
//
//    // Extract claims from JWT
//    public Claims extractClaims(String token) {
//        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
//    }
//    
// // Method to fetch all users
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//    
//    public String loginUser(String email, String password) {
//        Optional<User> userOptional = userRepository.findByEmail(email);
//        if (userOptional.isPresent()) {
//            User user = userOptional.get();
//            if (passwordEncoder.matches(password, user.getPassword())) {
//                return generateToken(user);
//            }
//        }
//        throw new RuntimeException("Invalid email or password");
//    }
//
//
////    // Login user and return token if successful
////    public String loginUser(String email, String password) {
////        Optional<User> userOptional = userRepository.findByEmail(email);
////        if (userOptional.isPresent()) {
////            User user = userOptional.get();
////            if (passwordEncoder.matches(password, user.getPassword())) {
////                return generateToken(user);
////            }
////        }
////        throw new RuntimeException("Invalid email or password");
////    }
//    
//    public String login(String email, String password) {
//        Optional<User> userOptional = userRepository.findByEmail(email);
//        if (userOptional.isPresent()) {
//            User user = userOptional.get();
//            if (passwordEncoder.matches(password, user.getPassword())) {
//                return generateToken(user);
//            }
//        }
//        throw new RuntimeException("Invalid email or password");
//    }
//
//
//    
//    
//}

//
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.brainsecret.entity.User;
//import com.brainsecret.repository.UserRepository;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    // 1. Create User
//    public User createUser(User user) {
//        return userRepository.save(user);
//    }
//
//    // 2. Get All Users
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    // 3. Get User by ID
//    public User getUserById(Long id) {
//        return userRepository.findById(id)
//            .orElseThrow(() -> new RuntimeException("User not found"));
//    }
//
//    // 4. Update User
//    public User updateUser(Long id, User updatedUser) {
//        User existingUser = getUserById(id);
//        existingUser.setName(updatedUser.getName());
//        existingUser.setEmail(updatedUser.getEmail());
//        existingUser.setPhone(updatedUser.getPhone());
//        existingUser.setPassword(updatedUser.getPassword());
//        existingUser.setRole(updatedUser.getRole());
//        return userRepository.save(existingUser);
//    }
//
//    // 5. Delete User
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
//    
//    public Optional<User> findByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//}
//
//
//
//
//
////
////
////import java.util.Optional;
////
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////
////import com.brainsecret.entity.User;
////import com.brainsecret.repository.UserRepository;
////
////
////public class UserService {
////
////	
////	@Autowired
////    private UserRepository userRepository;
////
////    @Autowired
////    private BCryptPasswordEncoder passwordEncoder;
////
////    // Register a new user
////    public User registerUser(User user) {
////        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
////            throw new RuntimeException("Email already registered!");
////        }
////        user.setPassword(passwordEncoder.encode(user.getPassword())); // Hash password
////        return userRepository.save(user);
////    }
////
////    // Authenticate user
////    public User loginUser(String email, String password) {
////        Optional<User> user = userRepository.findByEmail(email);
////        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
////            return user.get();
////        }
////        throw new RuntimeException("Invalid email or password!");
////    }
////	
////}
