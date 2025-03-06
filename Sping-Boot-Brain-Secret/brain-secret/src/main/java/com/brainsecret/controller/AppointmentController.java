package com.brainsecret.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.brainsecret.entity.Appointment;
import com.brainsecret.service.AppointmentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to access backend
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    // Fetch all appointments
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return service.getAllAppointments();
    }
    
 // New method to fetch the last 7 appointments
    @GetMapping("/latest")
    public List<Appointment> getLatestAppointments() {
        return service.getLatestAppointments(7); // Service method to fetch the latest 7 appointments
    }


    // Create an appointment with slot validation
    @PostMapping
    public ResponseEntity<?> createAppointment(@RequestBody Appointment appointment) {
        boolean isSlotBooked = service.isSlotBooked(appointment.getPreferredDate(), appointment.getTimeSlot());

        if (isSlotBooked) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("This time slot is already booked. Please choose another slot.");
        }

        try {
            Appointment savedAppointment = service.saveAppointment(appointment);
            return ResponseEntity.status(HttpStatus.CREATED).body("Appointment booked successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error in booking, please try again.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAppointment(@PathVariable Long id) {
        Optional<Appointment> appointment = service.getAppointmentById(id);
        
        if (appointment.isPresent()) {
            return ResponseEntity.ok(appointment.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Appointment not found");
        }
    }


    // Delete an appointment
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable Long id) {
        boolean isDeleted = service.deleteAppointment(id);
        if (isDeleted) {
            return ResponseEntity.ok("Appointment deleted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Appointment not found.");
        }
    }

    // Update an existing appointment
    @PutMapping("/{id}")
    public ResponseEntity<?> updateAppointment(@PathVariable Long id, @RequestBody Appointment updatedAppointment) {
        Optional<Appointment> existingAppointmentOpt = service.getAppointmentById(id);

        if (existingAppointmentOpt.isPresent()) {
            Appointment existingAppointment = existingAppointmentOpt.get();

            // Update fields
            existingAppointment.setName(updatedAppointment.getName());
            existingAppointment.setEmail(updatedAppointment.getEmail());
            existingAppointment.setPhone(updatedAppointment.getPhone());
            existingAppointment.setService(updatedAppointment.getService());
            existingAppointment.setPreferredDate(updatedAppointment.getPreferredDate());
            existingAppointment.setTimeSlot(updatedAppointment.getTimeSlot());
            existingAppointment.setTherapist(updatedAppointment.getTherapist());
            existingAppointment.setMessage(updatedAppointment.getMessage());
            existingAppointment.setSeverityScale(updatedAppointment.getSeverityScale());

            // Save updated appointment
            Appointment savedAppointment = service.saveAppointment(existingAppointment);
            return ResponseEntity.ok(savedAppointment);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Appointment with ID " + id + " not found.");
        }
    }
}
