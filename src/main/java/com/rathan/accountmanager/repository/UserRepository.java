package com.rathan.accountmanager.repository;

import com.rathan.accountmanager.entity.User;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmailAndUsername(String email, String username);
    boolean existsByEmailOrUsername(String email, String username);

}
