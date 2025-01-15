package com.rathan.accountmanager.service;

import com.rathan.accountmanager.entity.Account;
import com.rathan.accountmanager.entity.User;
import com.rathan.accountmanager.repository.AccountRepository;
import com.rathan.accountmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Account> findAccountsByUser(String username) {
        return accountRepository.findByUserUsername(username);
    }

    public void createAccount(String username, Account account) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        account.setUser(user);
        accountRepository.save(account);
    }

    public Account deleteAccountByAccNo(String username, String accNo) {
        Account account = accountRepository.findByAccountNumberAndUser_Username(accNo, username);
        accountRepository.delete(account);
        return account;
    }

    public Account getAccountByAccNo(String accNo, String username) {
        return accountRepository.findByAccountNumberAndUser_Username(accNo, username);
    }

    public Account updateAccountByAccNo( Account account) {
        return accountRepository.save(account);
    }
}
