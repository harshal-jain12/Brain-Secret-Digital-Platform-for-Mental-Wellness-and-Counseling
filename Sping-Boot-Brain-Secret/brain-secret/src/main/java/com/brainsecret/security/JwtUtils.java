package com.brainsecret.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.Set;
import java.util.HashSet;

@Component
public class JwtUtils {

    private final String SECRET_KEY = "6Ld0nu0qAAAAAEjRzCOUwl4CkQNtk4V6L3i3M73a";
    private final long EXPIRATION_TIME = 180000; // 3 minutes

    private final Set<String> blacklistedTokens = new HashSet<>();

    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public boolean validateToken(String token) {
        if (blacklistedTokens.contains(token)) return false;
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public String extractRole(String token) {
        Claims claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
        return claims.get("role", String.class);
    }

    public void blacklistToken(String token) {
        if (token != null && !token.isEmpty()) blacklistedTokens.add(token);
    }
}









//package com.brainsecret.security;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.stereotype.Component;
//
//import java.util.Date;
//import java.util.HashSet;
//import java.util.Set;
//
//@Component
//public class JwtUtils {
//
//    private final String SECRET_KEY = "your_secret_key"; // Change to your actual secret key
//    private final long EXPIRATION_TIME = 180000; // 3 minutes in milliseconds
//
//    // A simple in-memory blacklist (consider using a persistent store in production)
//    private final Set<String> blacklistedTokens = new HashSet<>();
//
//    public String generateToken(String username) {
//        return Jwts.builder()
//                .setSubject(username)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
//                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
//                .compact();
//    }
//
//    public boolean validateToken(String token) {
//        if (blacklistedTokens.contains(token)) {
//            return false; // Token is invalid if blacklisted
//        }
//
//        try {
//            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
//            return true;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return false;
//        }
//    }
//
//    public String extractUsername(String token) {
//        return getClaimsFromToken(token).getSubject();
//    }
//
//    private Claims getClaimsFromToken(String token) {
//        return Jwts.parser()
//                .setSigningKey(SECRET_KEY)
//                .parseClaimsJws(token)
//                .getBody();
//    }
//
//    public void blacklistToken(String token) {
//        if (token != null && !token.isEmpty()) {
//            blacklistedTokens.add(token); // Add the token to the blacklist
//        }
//    }
//}
//
