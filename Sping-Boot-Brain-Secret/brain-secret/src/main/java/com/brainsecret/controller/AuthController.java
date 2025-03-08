package com.brainsecret.controller;

import com.brainsecret.entity.User;
import com.brainsecret.repository.UserRepository;
import com.brainsecret.service.JwtService;
import com.brainsecret.service.ReCaptchaService;
import com.brainsecret.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.brainsecret.security.JwtUtils;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")  // Adjust CORS policy as needed
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private ReCaptchaService reCaptchaService;

    // ✅ User Registration API
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> request) {
        String name = request.get("name");
        String email = request.get("email");
        String phone = request.get("phone");
        String password = request.get("password");
        String role = request.get("role");
        String recaptchaToken = request.get("recaptchaToken");

        // ✅ Google reCAPTCHA Verification
        boolean isCaptchaValid = reCaptchaService.validateCaptcha(recaptchaToken);
        if (!isCaptchaValid) {
            return ResponseEntity.badRequest().body("Invalid reCAPTCHA. Please try again.");
        }

        if (userRepository.findByEmail(email).isPresent()) {
            return ResponseEntity.badRequest().body("Email already registered!");
        }

        User newUser = new User();
        newUser.setName(name);
        newUser.setEmail(email);
        newUser.setPhone(phone);
        newUser.setPassword(passwordEncoder.encode(password));
        newUser.setRole(role);

        userRepository.save(newUser);

        return ResponseEntity.ok("User registered successfully!");
    }

    // ✅ Get All Users
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // ✅ User Login API (JWT Authentication)
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found!"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid credentials!");
        }

        String token = jwtService.generateToken(user);

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful!");
        response.put("token", token);
        response.put("role", user.getRole());

        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/validate")
    public ResponseEntity<String> validateToken(@RequestParam String token) {
        boolean isValid = jwtUtils.validateToken(token);
      if (isValid) {
          return ResponseEntity.ok("Token is valid");
      } else {
          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
      }
  }

    // ✅ Logout User (Basic Implementation)
    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser() {
        return ResponseEntity.ok("User logged out successfully!");
    }
}



//
//package com.brainsecret.controller;
//
//import com.brainsecret.entity.User;
//import com.brainsecret.service.UserService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//
//    private final UserService userService;
//
//    public AuthController(UserService userService) {
//        this.userService = userService;
//    }
//
//    // ✅ Register a New User
//    @PostMapping("/register")
//    public ResponseEntity<User> registerUser(@RequestBody User user) {
//        User newUser = userService.registerUser(user);
//        return ResponseEntity.ok(newUser);
//    }
//
//    // ✅ Get All Users
//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getAllUsers() {
//        List<User> users = userService.getAllUsers();
//        return ResponseEntity.ok(users);
//    }
//
//    // ✅ Logout User (Basic Implementation)
//    @PostMapping("/logout")
//    public ResponseEntity<String> logoutUser() {
//        return ResponseEntity.ok("User logged out successfully!");
//    }
//}




//package com.brainsecret.controller;
//
//import java.util.Map;
//
//// AuthController
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.brainsecret.dto.LoginDTO;
//import com.brainsecret.dto.UserDTO;
//import com.brainsecret.service.UserService;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
//        try {
//            userService.registerUser(userDTO);
//            return ResponseEntity.ok("User registered successfully");
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
//        try {
//            String token = userService.loginUser(loginDTO);
//            String role = userService.getRole(loginDTO.getEmail());
//            return ResponseEntity.ok(Map.of("token", token, "role", role));
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }
//}
