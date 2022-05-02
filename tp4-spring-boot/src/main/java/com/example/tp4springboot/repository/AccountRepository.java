package com.example.tp4springboot.repository;

import com.example.tp4springboot.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AccountRepository extends JpaRepository<Account, Long> {

}
