package com.example.tp4springboot.service;

import com.example.tp4springboot.model.Account;
import com.example.tp4springboot.model.Client;
import com.example.tp4springboot.model.Employee;
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

    public long createEmployee(String firstName, String lastName, String password) {
        Employee employee = Employee.builder().firstName(firstName).lastName(lastName).password(password).build() ;
        accountRepository.save(employee) ;
        return employee.getId() ;
    }

    public Optional<Client> getClientByIdWithBorrowing(long id) {
        return clientRepository.findClientByIdWithBorrowings(id) ;
    }

    public List<Account> getAccounts() {
        return accountRepository.findAll() ;
    }

    public List<Client> getClients() {
        return clientRepository.findAll() ;
    }
}
