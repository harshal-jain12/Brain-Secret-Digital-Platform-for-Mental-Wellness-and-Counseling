package com.brainsecret.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brainsecret.entity.User;

//@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	 Optional<User> findByName(String name);
//	Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}