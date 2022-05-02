package com.example.tp4springboot.repository;

import com.example.tp4springboot.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query(value = "SELECT c from Client c LEFT JOIN FETCH c.borrowings cb LEFT JOIN FETCH cb.borrowedDocument cbd WHERE c.id  = :clientId")
    Optional<Client> findClientByIdWithBorrowings(@Param("clientId") long clientId) ;
}
