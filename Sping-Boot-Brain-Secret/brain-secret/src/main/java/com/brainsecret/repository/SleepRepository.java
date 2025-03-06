package com.brainsecret.repository;

import com.brainsecret.entity.SleepResult;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SleepRepository extends JpaRepository<SleepResult, Integer> {
}
