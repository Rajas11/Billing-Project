package com.example.billing.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.billing.entity.User;
import com.example.billing.enums.Role;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
	 Optional<User> findByRole(Role role);
	 Optional<User> findByEmail(String email);
}