package com.rathan.accountmanager.service;

import com.rathan.accountmanager.entity.Account;
import com.rathan.accountmanager.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public List<Account> findAccountsByUser(String username) {
        return accountRepository.findByUserUsername(username);
    }

    public Account createAccount(String username, Account account) {
        // Logic to create an account for the user
        return accountRepository.save(account);
    }

    public Account deleteAccountByAccNo(String username, String accNo) {
        Account account = accountRepository.findByAccountNumber(accNo);
        accountRepository.delete(account);
        return account;
    }

    public Account getAccountByAccNo(String accNo) {
        return accountRepository.findByAccountNumber(accNo);
    }

    public Account updateAccountByAccNo( Account account) {
        return accountRepository.save(account);
    }
}
