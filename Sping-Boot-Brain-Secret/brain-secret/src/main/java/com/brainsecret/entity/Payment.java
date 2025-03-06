package com.brainsecret.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_id", unique = true)
    private String orderId;

    @Column(name = "payment_id")
    private String paymentId;

    @Column(name = "amount")
    private Integer amount;

    @Column(name = "status")
    private String status;

    public Payment() {}

    public Payment(String orderId, String paymentId, Integer amount, String status) {
        this.orderId = orderId;
        this.paymentId = paymentId;
        this.amount = amount;
        this.status = status;
    }

    // Getters and Setters
}
