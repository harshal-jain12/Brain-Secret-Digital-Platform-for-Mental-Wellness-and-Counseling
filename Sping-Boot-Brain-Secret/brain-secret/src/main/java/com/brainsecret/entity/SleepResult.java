package com.brainsecret.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
@Table(name = "sleep_results")
public class SleepResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull(message = "User ID is required.")
    private int userId;

    @NotNull(message = "Sleep time is required.")
    @Pattern(regexp = "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$", message = "Invalid sleep time format (HH:mm).")
    private String sleepTime;

    @NotNull(message = "Wake time is required.")
    @Pattern(regexp = "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$", message = "Invalid wake time format (HH:mm).")
    private String wakeTime;

    @NotNull(message = "Disturbances field is required.")
    private int disturbances;

    private String sleepQuality;
    
    

}
