package com.example.tp4springboot.service;

import com.example.tp4springboot.model.Client;
import com.example.tp4springboot.repository.AccountRepository;
import com.example.tp4springboot.repository.ClientRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class AdminService {
    private AccountRepository accountRepository ;
    private ClientRepository clientRepository ;

    public AdminService(AccountRepository accountRepository,
                         ClientRepository clientRepository) {
        this.accountRepository = accountRepository ;
        this.clientRepository = clientRepository ;
    }

    public long createClient(String firstName, String lastName, String password) {
        Client client = Client.builder().firstName(firstName).lastName(lastName).password(password).build() ;
        accountRepository.save(client) ;
        return client.getId() ;
    }

    public long createClient(Client client) {
        accountRepository.save(client) ;
        return client.getId() ;
    }

    public Optional<Client> getClientByIdWithBorrowing(long id) {
        return clientRepository.findClientByIdWithBorrowings(id) ;
    }

    public List<Client> getClients() {
        return clientRepository.findAll() ;
    }
}
