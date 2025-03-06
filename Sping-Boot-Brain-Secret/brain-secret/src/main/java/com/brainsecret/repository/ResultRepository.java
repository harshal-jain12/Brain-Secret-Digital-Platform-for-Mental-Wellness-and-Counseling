package com.brainsecret.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brainsecret.entity.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
}
