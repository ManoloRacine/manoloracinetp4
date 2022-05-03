package com.example.tp4springboot.controller;

import com.example.tp4springboot.dto.SimpleAccountDTO;
import com.example.tp4springboot.model.Account;
import com.example.tp4springboot.service.AdminService;
import com.example.tp4springboot.service.ClientService;
import com.example.tp4springboot.service.EmployeeService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LibraryController {

    private final AdminService adminService ;
    private final ClientService clientService ;
    private final EmployeeService employeeService ;

    public LibraryController(AdminService adminService, ClientService clientService, EmployeeService employeeService) {
        this.adminService = adminService ;
        this.clientService = clientService ;
        this.employeeService = employeeService ;
    }

    @GetMapping("/accounts")
    public List<SimpleAccountDTO> getAllAccounts() {
        List<SimpleAccountDTO> listAccounts = new ArrayList<>() ;
        for (Account account : adminService.getAccounts()) {
            listAccounts.add(SimpleAccountDTO.fromAccount(account)) ;
        }
        return listAccounts ;
    }

}
