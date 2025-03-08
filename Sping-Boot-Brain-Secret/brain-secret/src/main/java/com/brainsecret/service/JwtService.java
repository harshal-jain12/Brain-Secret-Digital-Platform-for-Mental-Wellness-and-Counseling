package com.brainsecret.service;

import com.brainsecret.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET_KEY = "6Ld0nu0qAAAAAEjRzCOUwl4CkQNtk4V6L3i3M73a"; // Change this to a strong key

    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("role", user.getRole())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 day expiration
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}
