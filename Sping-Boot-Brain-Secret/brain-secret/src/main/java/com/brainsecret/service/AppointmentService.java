package com.brainsecret.service;

import com.brainsecret.entity.Appointment;
import com.brainsecret.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentService(AppointmentRepository repository) {
        this.repository = repository;
    }

    // Get all appointments
    public List<Appointment> getAllAppointments() {
        return repository.findAll();
    }
    
    public List<Appointment> getLatestAppointments(int limit) {
        return repository.findTop7ByOrderByPreferredDateDesc();
    }


    // Save appointment
    public Appointment saveAppointment(Appointment appointment) {
        return repository.save(appointment);
    }

    // Get appointment by ID
    public Optional<Appointment> getAppointmentById(Long id) {
        return repository.findById(id);
    }

    // Delete appointment
    public boolean deleteAppointment(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    // Check if a slot is already booked
    public boolean isSlotBooked(String date, String timeSlot) {
        return repository.existsByPreferredDateAndTimeSlot(date, timeSlot);
    }
}
