package com.example.tp4springboot;

import com.example.tp4springboot.service.AdminService;
import com.example.tp4springboot.service.ClientService;
import com.example.tp4springboot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Tp4SpringBootApplication implements CommandLineRunner {


    @Autowired
    private AdminService adminService ;

    @Autowired
    private EmployeeService employeeService ;

    @Autowired
    private ClientService clientService ;


    public static void main(String[] args) {
        SpringApplication.run(Tp4SpringBootApplication.class, args);
    }

    public void run(String... args) throws Exception {
        System.out.println("test");

        //create client
        long idClient = adminService.createClient("firstName", "lastName", "password") ;
        System.out.println(adminService.getClientByIdWithBorrowing(idClient));

        //create/save documents
        long idCD = employeeService.createCD("name1", "author", 2002, 100, "testa",  5);
        long idDVD = employeeService.createDVD("name1", "author1", 2002, 100, "testg", 5);
        long idBook = employeeService.createBook("name2", "author", 2020, 200, "testg",  5) ;

        //research
        System.out.println(clientService.researchDocumentByAuthor("author"));
        System.out.println(clientService.researchDocumentByYear(2002));
        System.out.println(clientService.researchDocumentByCategory("testg"));
        System.out.println(clientService.researchDocumentContainingTitle("e1"));

        //borrow document
        long borrowId = clientService.borrowDocument(idClient, idBook, 2) ;
        System.out.println(adminService.getClientByIdWithBorrowing(idClient));
        System.out.println(adminService.getClientByIdWithBorrowing(idClient).get().getBorrowings().get(0).borrowedDocument.getNbAvailable());

        //return document
        clientService.returnDocument(idClient, borrowId);
        System.out.println(adminService.getClientByIdWithBorrowing(idClient));


        clientService.borrowDocument(idClient, idBook, 2) ;
    }

}
