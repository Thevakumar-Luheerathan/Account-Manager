package com.rathan.accountmanager.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "account_number", nullable = false, unique = true)
    private String accountNumber;

    @Column(nullable = false)
    private Double amount = 0.0;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Column(nullable = false)
    private int duration;

    @Column(name = "interest_rate", nullable = false)
    private double interestRate;

    @Column(name = "interest_on", nullable = false)
    @Enumerated(EnumType.STRING)
    private InterestPaidOn interestOn;

    @Column(name = "interest_calculation_duration ", nullable = false)
    @Enumerated(EnumType.STRING)
    private InterestCalculationDuration interestCalculationDuration;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Currency currency;

    @Column(name = "bank_name", nullable = false)
    private String bankName;
}

enum InterestPaidOn {
    MATURITY,
    MONTHLY
}

enum InterestCalculationDuration {
    DAILY,
    MONTHLY
}

enum Currency {
    USD,
    LKR
}
