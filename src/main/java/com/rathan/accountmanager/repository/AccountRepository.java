package com.rathan.accountmanager.repository;

import com.rathan.accountmanager.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findByUserUsername(String username);
    Account findByAccountNumber(String accountNumber);
}