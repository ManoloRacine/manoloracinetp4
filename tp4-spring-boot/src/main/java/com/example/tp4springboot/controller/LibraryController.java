package com.example.tp4springboot.controller;

import com.example.tp4springboot.dto.SimpleAccountDTO;
import com.example.tp4springboot.dto.SimpleBorrowingDTO;
import com.example.tp4springboot.dto.SimpleDocumentDTO;
import com.example.tp4springboot.model.*;
import com.example.tp4springboot.service.AdminService;
import com.example.tp4springboot.service.ClientService;
import com.example.tp4springboot.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/documents")
    public List<SimpleDocumentDTO> getAllDocuments() {
        List<SimpleDocumentDTO> listDocuments = new ArrayList<>() ;
        for (Document document : clientService.getAllDocuments()) {
            listDocuments.add(SimpleDocumentDTO.fromDocument(document)) ;
        }
        return listDocuments ;
    }

    @PostMapping("/borrow")
    public List<SimpleDocumentDTO> borrow(@RequestBody int[] ids) throws Exception {
        clientService.borrowDocument(ids[1], ids[0], 7) ;
        System.out.println(adminService.getClientByIdWithBorrowing(ids[1]).get().getBorrowings());

        List<SimpleDocumentDTO> listDocuments = new ArrayList<>() ;
        for (Document document : clientService.getAllDocuments()) {
            listDocuments.add(SimpleDocumentDTO.fromDocument(document)) ;
        }
        return listDocuments ;
    }

    @GetMapping("/client/{id}")
    public List<SimpleBorrowingDTO> getBorrowingsClient(@PathVariable("id") long id) {
        List<SimpleBorrowingDTO> listBorrowings = new ArrayList<>() ;
        for (Borrowing borrowing : adminService.getClientByIdWithBorrowing(id).get().getBorrowings()) {
            listBorrowings.add(SimpleBorrowingDTO.fromBorrowing(borrowing)) ;
        }
        return listBorrowings ;
    }

    @DeleteMapping("/returnBorrowing")
    public void returnBorrowing(@RequestBody int[] ids) throws Exception {
        clientService.returnDocument(ids[0], ids[1]);
    }

    @PostMapping("/createDVD")
    public SimpleDocumentDTO createDVD(@RequestBody DVD dvd) {
        long id =  employeeService.createDVD(dvd.getName(), dvd.getAuthor(), dvd.getReleaseYear(), dvd.getNbMinutes(),
                dvd.getGenre(), dvd.getNbAvailable()) ;
        System.out.println("test");
        return SimpleDocumentDTO.fromDocument(employeeService.getDocumentById(id)) ;
    }

    @PostMapping("/createCD")
    public SimpleDocumentDTO createCD(@RequestBody CD cd) {
        long id =  employeeService.createCD(cd.getName(), cd.getAuthor(), cd.getReleaseYear(), cd.getNbMinutes(),
                cd.getGenre(), cd.getNbAvailable()) ;
        System.out.println("test");
        return SimpleDocumentDTO.fromDocument(employeeService.getDocumentById(id)) ;
    }

    @PostMapping("/createBook")
    public SimpleDocumentDTO createBook(@RequestBody Book book) {
        long id =  employeeService.createBook(book) ;
        System.out.println("test");
        return SimpleDocumentDTO.fromDocument(employeeService.getDocumentById(id)) ;
    }

    @PostMapping("/createClient")
    public SimpleAccountDTO createClient(@RequestBody Client client) {
        long id =  adminService.createClient(client) ;
        System.out.println("test");
        return SimpleAccountDTO.fromAccount(adminService.getClientByIdWithBorrowing(id).get()) ;
    }

    @GetMapping("/documentResearch")
    public List<SimpleDocumentDTO> documentResearch(@RequestParam(name = "title", required = false) String title,
                                           @RequestParam(name = "author", required = false) String author,
                                           @RequestParam(name = "year", required = false) String year,
                                           @RequestParam(name = "genre", required = false) String genre) {
        List<Document> documentList = clientService.getAllDocuments() ;
        System.out.println("test1");
        if (title != null) documentList = clientService.filterByTitle(documentList,title);
        if (author != null) documentList = clientService.filterByAuthor(documentList,author);
        if (year != null) documentList = clientService.filterByYear(documentList,Integer.getInteger(year));
        if (genre != null) documentList = clientService.filterByGenre(documentList,genre);

        List<SimpleDocumentDTO> simpleDocumentDTOList = new ArrayList<>() ;
        for (Document document : documentList) {
            simpleDocumentDTOList.add(SimpleDocumentDTO.fromDocument(document)) ;
        }

        return simpleDocumentDTOList ;
    }

}
