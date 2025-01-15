package com.rathan.accountmanager.controller;


import com.rathan.accountmanager.entity.Account;
import com.rathan.accountmanager.entity.User;
import com.rathan.accountmanager.repository.AccountRepository;
import com.rathan.accountmanager.service.AccountService;
import com.rathan.accountmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;


    @GetMapping("/search/all")
    public ResponseEntity<?> getUserAccounts(Authentication authentication) {
        try{
            List<Account> accountsByUser = accountService.findAccountsByUser(authentication.getName());
            return ResponseEntity.ok(accountsByUser);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error occurred while retrieving accounts");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?>  getUserAccount(@RequestParam("accNo") String accNo, Authentication authentication) {
        try{
            Account accountByAccNo = accountService.getAccountByAccNo(accNo,authentication.getName());
            return ResponseEntity.ok(accountByAccNo);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error occurred while retrieving accounts");
        }
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAccount(@RequestBody Account account, Authentication authentication) {
        try{
            accountService.createAccount(authentication.getName(), account);
            return ResponseEntity.ok().body("Account creation is successful");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error occurred during account creation");
        }
    }

    @DeleteMapping("/remove")
    public ResponseEntity<?> deleteAccount(@RequestParam("accNo") String accNo, Authentication authentication) {
        try{
            Account account = accountService.deleteAccountByAccNo(accNo, authentication.getName());
            return ResponseEntity.ok(account);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error occurred while deleting the account");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateAccount(@RequestBody Account account, Authentication authentication) {
        try{
            accountService.createAccount(authentication.getName(), account);
            return ResponseEntity.ok().body("Account creation is successful");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error occurred during account creation");
        }
    }
}
