package com.example.billing.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.billing.dto.SignupRequest;
import com.example.billing.entity.User;
import com.example.billing.enums.Role;
import com.example.billing.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        userRepository.save(user);
    }
    
    public void registerUser(SignupRequest signupRequest) {
        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setEmail(signupRequest.getEmail());

        // Store password as plain text (not recommended for production)
        user.setPassword(signupRequest.getPassword());

        // Set role (default: USER)
        Role role = (signupRequest.getRole() != null) ? Role.valueOf(signupRequest.getRole()) : Role.ROLE_USER;
        user.setRole(role);

        userRepository.save(user);
    }
}
