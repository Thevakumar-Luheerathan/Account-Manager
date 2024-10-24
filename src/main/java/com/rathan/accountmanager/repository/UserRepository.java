package com.rathan.accountmanager.repository;

import com.rathan.accountmanager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Method to find a User by their username
    Optional<User> findByUsername(String username);

    // Method to check if a User with a specific username already exists
    boolean existsByUsername(String username);
}
