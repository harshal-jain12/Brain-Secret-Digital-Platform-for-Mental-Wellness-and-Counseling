//package com.brainsecret.auth;
//
//import com.brainsecret.entity.User;
//import com.brainsecret.repository.UserRepository;
//import com.brainsecret.service.JwtService;
//import com.brainsecret.service.ReCaptchaService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/auth")
//@CrossOrigin(origins = "*")  // Adjust CORS policy as needed
//public class AuthController {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @Autowired
//    private JwtService jwtService;
//
//    @Autowired
//    private ReCaptchaService reCaptchaService;
//
//    // ✅ User Registration API
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> request) {
//        String name = request.get("name");
//        String email = request.get("email");
//        String phone = request.get("phone");
//        String password = request.get("password");
//        String role = request.get("role");
//        String recaptchaToken = request.get("recaptchaToken");
//
//        // ✅ Google reCAPTCHA Verification
//        boolean isCaptchaValid = reCaptchaService.validateCaptcha(recaptchaToken);
//        if (!isCaptchaValid) {
//            return ResponseEntity.badRequest().body("Invalid reCAPTCHA. Please try again.");
//        }
//
//        if (userRepository.findByEmail(email).isPresent()) {
//            return ResponseEntity.badRequest().body("Email already registered!");
//        }
//
//        User newUser = new User();
//        newUser.setName(name);
//        newUser.setEmail(email);
//        newUser.setPhone(phone);
//        newUser.setPassword(passwordEncoder.encode(password));
//        newUser.setRole(role);
//
//        userRepository.save(newUser);
//
//        return ResponseEntity.ok("User registered successfully!");
//    }
//
//    // ✅ User Login API (JWT Authentication)
//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> request) {
//        String email = request.get("email");
//        String password = request.get("password");
//
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() -> new RuntimeException("User not found!"));
//
//        if (!passwordEncoder.matches(password, user.getPassword())) {
//            return ResponseEntity.badRequest().body("Invalid credentials!");
//        }
//
//        String token = jwtService.generateToken(user);
//
//        Map<String, Object> response = new HashMap<>();
//        response.put("message", "Login successful!");
//        response.put("token", token);
//        response.put("role", user.getRole());
//
//        return ResponseEntity.ok(response);
//    }
//}
