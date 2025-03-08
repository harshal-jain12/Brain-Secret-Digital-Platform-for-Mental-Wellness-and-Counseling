package com.brainsecret.controller;

import com.brainsecret.entity.User;
import com.brainsecret.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")  // Adjust CORS policy as needed
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // ✅ Get User Details by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().build());  // Fixed issue
    }

    // ✅ Update User Profile
    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setName(updatedUser.getName());
            user.setPhone(updatedUser.getPhone());
            user.setRole(updatedUser.getRole());
            userRepository.save(user);
            return ResponseEntity.ok("User updated successfully!");
        }).orElseGet(() -> ResponseEntity.badRequest().body("User not found!"));
    }
}









//package com.brainsecret.controller;
//
//import com.brainsecret.entity.User;
//import com.brainsecret.repository.UserRepository;
//import com.brainsecret.entity.LoginResponse;
//import com.brainsecret.entity.LoginRequest;
//import com.brainsecret.service.AuthService;
////import com.brainsecret.service.UserService;
//import com.brainsecret.security.JwtUtils;
//import com.brainsecret.security.UserDetailsImpl;
//
//import org.hibernate.validator.internal.util.stereotypes.Lazy;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/auth")
//@CrossOrigin("*")
//public class UserController {
//
////    @Autowired
////    private UserService userService;
//
//	@Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//	
//    @Autowired
//   // @Lazy
//    private AuthService authService;
//
//    @Autowired
//    private JwtUtils jwtUtils;
//
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @PostMapping("/register")
//    public ResponseEntity<String> registerUser(@RequestBody User user) {
//        try {
//            authService.registerUser(user);
//            return ResponseEntity.ok("User registered successfully");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
//        }
//    }
//    
//    
//    
//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
//        Optional<User> optionalUser = userRepository.findByEmail(loginRequest.getEmail()); // Ensure using correct field
//
//        if (optionalUser.isPresent()) {
//            User user = optionalUser.get();
//
//            // Verify password
//            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
//                String role = user.getRole();  // Retrieve user role
//                String token = jwtUtils.generateToken(user.getEmail(), role);  // Fixed method call
//
//                return ResponseEntity.ok(new LoginResponse(token, role));  // Return token & role
//            } else {
//                return ResponseEntity.badRequest().body("Invalid credentials");
//            }
//        } else {
//            return ResponseEntity.badRequest().body("User not found");
//        }
//    }
//
//    
//
////    @PostMapping("/login")
////    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
////        try {
////            Authentication authentication = authenticationManager.authenticate(
////                new UsernamePasswordAuthenticationToken(
////                    loginRequest.getEmail(),
////                    loginRequest.getPassword()
////                )
////            );
////
////            SecurityContextHolder.getContext().setAuthentication(authentication);
////            String jwt = jwtUtils.generateToken(authentication.getName());
////
////            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
////            String role = userDetails.getAuthorities().stream()
////                                     .findFirst()
////                                     .map(GrantedAuthority::getAuthority)
////                                     .orElse("USER");
////
////            LoginResponse response = new LoginResponse(jwt, role);
////            return ResponseEntity.ok().body(response);
////        } catch (Exception e) {
////            e.printStackTrace();
////            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
////        }
////    }
//    
//    
//    
//
//    @PostMapping("/logout")
//    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token) {
//        if (token != null && token.startsWith("Bearer ")) {
//            token = token.substring(7);
//        }
//        try {
//            jwtUtils.blacklistToken(token);
//            return ResponseEntity.ok("User logged out successfully.");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error during logout.");
//        }
//    }
//
//    @GetMapping("/validate")
//    public ResponseEntity<String> validateToken(@RequestParam String token) {
//        boolean isValid = jwtUtils.validateToken(token);
//        if (isValid) {
//            return ResponseEntity.ok("Token is valid");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
//        }
//    }
//
//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getAllUsers() {
//        try {
//            List<User> users = authService.getAllUsers();
//            return ResponseEntity.ok(users);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//        }
//    }
//}







//package com.brainsecret.controller;
//
//import com.brainsecret.entity.User;
//import com.brainsecret.entity.LoginResponse;
//import com.brainsecret.entity.LoginRequest;
//import com.brainsecret.service.AuthService;
//import com.brainsecret.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import java.util.List;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import com.brainsecret.security.JwtUtils;  // Replace with your actual package path
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import com.brainsecret.security.UserDetailsImpl;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//
//
//@RestController
//@RequestMapping("/api/auth")
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//    
//    @Autowired
//    private JwtUtils jwtUtils;
//
//
//    @Autowired
//    private AuthService authService; // Ensure AuthService is injected
//
//    // Register user endpoint
//    @PostMapping("/register")
//    public ResponseEntity<String> registerUser(@RequestBody User user) {
//        try {
//            authService.registerUser(user); // Use authService for registration
//            return ResponseEntity.ok("User registered successfully");
//        } catch (Exception e) {
//            e.printStackTrace(); // Log the error for debugging
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
//        }
//    }
//
//    // Login endpoint
//    
//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
//        // Validate user credentials
//        Authentication authentication = userService.authenticate(
//            new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
//        );
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        String jwt = jwtUtils.generateJwtToken(authentication);
//
//        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
//        String role = userDetails.getAuthorities().stream()
//                                 .findFirst() // Assuming there's only one role per user
//                                 .map(GrantedAuthority::getAuthority)
//                                 .orElse(null);
//
//        if (role == null) {
//            return ResponseEntity.badRequest().body("Role not found for user.");
//        }
//
//        // Include role in the response
//        return ResponseEntity.ok(new LoginResponse(jwt, role));
//    }
//
////    @PostMapping("/login")
////    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
////        try {
////            String token = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
////            return ResponseEntity.ok().body("{\"token\": \"" + token + "\"}");
////        } catch (Exception e) {
////            e.printStackTrace();
////            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
////        }
////    }
//
//    // Token validation endpoint
//    @GetMapping("/validate")
//    public ResponseEntity<String> validateToken(@RequestParam String token) {
//        boolean isValid = userService.validateToken(token);
//        if (isValid) {
//            return ResponseEntity.ok("Token is valid");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
//        }
//    }
//    
// // API to get all users
//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getAllUsers() {
//        try {
//            List<User> users = userService.getAllUsers();
//            return ResponseEntity.ok(users);
//        } catch (Exception e) {
//            e.printStackTrace(); // Log the error for debugging
//            return ResponseEntity.status(500).body(null); // Internal Server Error
//        }
//    }
//}


//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.brainsecret.dto.LoginRequest;
//import com.brainsecret.entity.User;
//import com.brainsecret.service.UserService;
//
//import jakarta.validation.Valid;
//
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//    // 1. Create User
//    @PostMapping
//    public ResponseEntity<User> createUser(@RequestBody User user) {
//        User savedUser = userService.createUser(user);
//        return ResponseEntity.ok(savedUser);
//    }
//
//    // 2. Get All Users
//    @GetMapping
//    public ResponseEntity<List<User>> getAllUsers() {
//        List<User> users = userService.getAllUsers();
//        return ResponseEntity.ok(users);
//    }
//
//    // 3. Get User by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<User> getUserById(@PathVariable Long id) {
//        User user = userService.getUserById(id);
//        return ResponseEntity.ok(user);
//    }
//
//    // 4. Update User
//    @PutMapping("/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
//        User updatedUser = userService.updateUser(id, user);
//        return ResponseEntity.ok(updatedUser);
//    }
//
//    // 5. Delete User
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
//        userService.deleteUser(id);
//        return ResponseEntity.noContent().build();
//    }
//    
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
//        Optional<User> user = userService.findByEmail(loginRequest.getEmail());
//        if (user.isPresent() && user.get().getPassword().equals(loginRequest.getPassword())) {
//            return ResponseEntity.ok("Login successful");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//        }
//    }
//    
//    
//}
