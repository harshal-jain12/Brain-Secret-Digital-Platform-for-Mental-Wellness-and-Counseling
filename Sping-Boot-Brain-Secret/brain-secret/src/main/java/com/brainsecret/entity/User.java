package com.brainsecret.entity;

import java.util.Collection;
import java.util.Collections;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User implements UserDetails {  // ✅ Implements UserDetails
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    @NotBlank(message = "Username cannot be blank")
    private String name;  // ✅ Changed to match getUsername()

    @Column(nullable = false, unique = true)
    @Email(message = "Invalid email format")
    private String email;

    @Column(nullable = true, unique = true)
    @Size(min = 10, max = 10, message = "Phone must be at least 10 characters long")
    private String phone;

    @Column(nullable = false)
    @NotBlank(message = "Password cannot be blank")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;

    @Column(nullable = false)
    private String role = "USER"; // Default role

    // ✅ Fix: Define getUsername() for Spring Security
    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public String getPassword() {
        return password;
    }

    // ✅ Fix: Return authorities (for now, return empty)
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptyList();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}









//package com.brainsecret.entity;
//
//import java.util.List;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.OneToMany;
//import jakarta.persistence.Table;
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Table(name = "users")
//@Data // Combines @Getter, @Setter, @ToString, @EqualsAndHashCode
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(nullable = false, unique = true)
//    @NotBlank(message = "Username cannot be blank") // Validation
//    private String name;
//    
//    @Column(nullable = false, unique = true)
//    @Email(message = "Invalid email format") // Validation
//    private String email;
//    
//    @Column(nullable = true, unique = true)
//    @Size(min = 10, max = 10, message = "Phone must be at least 10 characters long")
//    private String phone;
//    
//    @Column(nullable = false)
//    @NotBlank(message = "Password cannot be blank")
//    @Size(min = 6, message = "Password must be at least 6 characters long") // Validation
//    
//    private String password;
//    
//    @Column(nullable = false)
//    private String role = "USER"; // Default role
//
//  
//    // Getters and Setters
//}
//
