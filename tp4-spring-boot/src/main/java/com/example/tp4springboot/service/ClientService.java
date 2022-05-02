package com.example.tp4springboot.service;

import com.example.tp4springboot.exceptions.NonExistingClientException;
import com.example.tp4springboot.exceptions.UnavailableDocumentException;
import com.example.tp4springboot.model.Borrowing;
import com.example.tp4springboot.model.Client;
import com.example.tp4springboot.model.Document;
import com.example.tp4springboot.repository.BorrowingRepository;
import com.example.tp4springboot.repository.ClientRepository;
import com.example.tp4springboot.repository.DocumentRepository;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

@Component
public class ClientService {
    private BorrowingRepository borrowingRepository ;
    private DocumentRepository documentRepository ;
    private ClientRepository clientRepository ;

    public ClientService(BorrowingRepository borrowingRepository, DocumentRepository documentRepository,
                         ClientRepository clientRepository) {
        this.borrowingRepository = borrowingRepository ;
        this.documentRepository = documentRepository ;
        this.clientRepository = clientRepository ;
    }

    public List<Document> researchDocumentByAuthor(String author) {
        return documentRepository.findAllByAuthor(author) ;
    }

    public List<Document> researchDocumentByYear(int year) {
        return documentRepository.findAllByReleaseYear(year) ;
    }

    public List<Document> researchDocumentByCategory(String category) {
        return documentRepository.findDocumentByGenre(category) ;
    }

    public List<Document> researchDocumentContainingTitle(String title) {
        return documentRepository.findDocumentByNameContains(title) ;
    }

    public List<Document> getAllDocuments() {
        return documentRepository.findAll() ;
    }

    @Transactional
    public long borrowDocument(long clientId, long documentId, int nbDays) throws Exception {
        Optional<Client> client = clientRepository.findClientByIdWithBorrowings(clientId) ;

        if (client.isEmpty()) throw new NonExistingClientException() ;

        Document document = documentRepository.getById(documentId) ;

        if (document.getNbAvailable() == 0) throw new UnavailableDocumentException();

        Borrowing borrowing = Borrowing.builder().locationDate(LocalDateTime.now()).
                returnDate(LocalDateTime.now().plus(nbDays, ChronoUnit.DAYS)).borrowedDocument(document).build() ;

        document.setNbAvailable(document.getNbAvailable() - 1);


        client.get().borrowDocument(borrowing);

        documentRepository.save(document) ;
        borrowingRepository.save(borrowing) ;
        clientRepository.save(client.get()) ;

        return borrowing.getId() ;
    }

    @Transactional
    public void returnDocument(long clientId, long borrowId) throws Exception {
        Optional<Client> client = clientRepository.findClientByIdWithBorrowings(clientId) ;

        if (client.isEmpty()) throw new NonExistingClientException() ;

        Borrowing borrowing = borrowingRepository.getById(borrowId) ;

        Predicate<Borrowing> predicate = borrowingFromList -> borrowingFromList.getId() == borrowId ;

        client.get().getBorrowings().removeIf(predicate) ;

        Document borrowedDocument = borrowing.getBorrowedDocument() ;

        borrowedDocument.setNbAvailable(borrowedDocument.getNbAvailable() + 1);

        documentRepository.save(borrowedDocument) ;
        clientRepository.save(client.get()) ;
    }
}
