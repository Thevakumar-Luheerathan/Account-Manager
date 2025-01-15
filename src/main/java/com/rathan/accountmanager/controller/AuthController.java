package com.rathan.accountmanager.controller;

import com.rathan.accountmanager.dto.LoginRequest;
import com.rathan.accountmanager.dto.LoginResponse;
import com.rathan.accountmanager.entity.User;
import com.rathan.accountmanager.repository.UserRepository;
import com.rathan.accountmanager.service.UserDetailsServiceImpl;
import com.rathan.accountmanager.util.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (userRepository.existsByEmailOrUsername(user.getEmail(), user.getUsername())) {
            return ResponseEntity.badRequest().body("User already exists with the given email or username");
        }
        userRepository.save(user);
        return ResponseEntity.ok().body("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@RequestBody LoginRequest loginRequest, HttpServletResponse response) throws Exception {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        final UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());
        String jwt =  jwtUtil.generateToken(userDetails);
        Cookie cookie = new Cookie("jwt", jwt);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);  // For HTTPS
        cookie.setPath("/");
        cookie.setMaxAge(3600); // 1 hour
        response.addCookie(cookie);
        LoginResponse loginResponse = new LoginResponse("Login successful", userDetails.getUsername());
        return ResponseEntity.ok(loginResponse);
    }
}
