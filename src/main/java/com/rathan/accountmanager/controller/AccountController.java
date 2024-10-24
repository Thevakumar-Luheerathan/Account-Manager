package com.rathan.accountmanager.controller;


import com.rathan.accountmanager.entity.Account;
import com.rathan.accountmanager.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/search/all")
    public List<Account> getUserAccounts(Authentication authentication) {
        return accountService.findAccountsByUser(authentication.getName());
    }

    @GetMapping("/search")
    public Account getUserAccount(@RequestParam("accNo") String accNo) {
        return accountService.getAccountByAccNo(accNo);
    }

    @PostMapping("/create")
    public Account createAccount(@RequestBody Account account, Authentication authentication) {
        return accountService.createAccount(authentication.getName(), account);
    }

    @DeleteMapping("/remove")
    public Account deleteAccount(@RequestParam("accNo") String accNo, Authentication authentication) {
        return  accountService.deleteAccountByAccNo(accNo, authentication.getName());
    }

    @PutMapping("/update")
    public Account updateAccount(@RequestBody Account account, Authentication authentication) {
        return accountService.updateAccountByAccNo(account);
    }
}
