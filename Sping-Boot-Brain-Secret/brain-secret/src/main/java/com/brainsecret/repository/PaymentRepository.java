package com.brainsecret.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brainsecret.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
