package com.brainsecret.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "appointments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String service;
    private String preferredDate;
    private String timeSlot;
    private String therapist;
    private String message;
    private String severityScale;
    
    // Many-to-One relationship with User

}
