package com.example.billing.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.billing.dto.AuthRequest;
import com.example.billing.entity.User;
import com.example.billing.enums.Role;
import com.example.billing.repository.UserRepository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true") 
public class AuthController {

    @Autowired
    private UserRepository userRepository; 

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody AuthRequest authRequest) {
        Optional<User> userOptional = userRepository.findByEmail(authRequest.getEmail());

        if (userOptional.isEmpty() || !userOptional.get().getPassword().equals(authRequest.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }

        User user = userOptional.get();
        
        
        Map<String, Object> response = new HashMap<>();
        response.put("id", user.getId());
        response.put("email", user.getEmail());
        response.put("message", "Login successful");

        return ResponseEntity.ok(response);
    }
    

    // ✅ SIGNUP API (Register User)
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        Optional<User> existingUsername = userRepository.findByUsername(user.getUsername());

        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        if (existingUsername.isPresent()) {
            return ResponseEntity.badRequest().body("Username already taken");
        }

        
        if (user.getRole() == null) {
            user.setRole(Role.ROLE_USER);
        }

        // ✅ Save new user
        User savedUser = userRepository.save(user);

        Map<String, Object> response = new HashMap<>();
        response.put("id", savedUser.getId());
        response.put("username", savedUser.getUsername());
        response.put("email", savedUser.getEmail());
        response.put("role", savedUser.getRole());
        response.put("message", "User registered successfully");

        return ResponseEntity.ok(response);
    }
  
}
