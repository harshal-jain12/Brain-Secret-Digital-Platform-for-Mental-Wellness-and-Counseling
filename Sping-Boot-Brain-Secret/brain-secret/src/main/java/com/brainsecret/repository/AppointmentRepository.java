package com.brainsecret.repository;

import com.brainsecret.entity.Appointment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    boolean existsByPreferredDateAndTimeSlot(String preferredDate, String timeSlot);
    List<Appointment> findTop7ByOrderByPreferredDateDesc();
}
