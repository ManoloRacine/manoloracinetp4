package com.example.tp4springboot.service;

import com.example.tp4springboot.model.Book;
import com.example.tp4springboot.model.CD;
import com.example.tp4springboot.model.DVD;
import com.example.tp4springboot.repository.DocumentRepository;
import org.springframework.stereotype.Component;

@Component
public class EmployeeService {
    private DocumentRepository documentRepository ;

    public EmployeeService(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository ;
    }

    public long createCD(String name, String author, int releaseYear, int nbMinutes, String genre, int nbAvailable) {
        CD cd = CD.builder().name(name).genre(genre).
                author(author).
                releaseYear(releaseYear).
                nbMinutes(nbMinutes).nbAvailable(nbAvailable).build() ;
        documentRepository.save(cd) ;
        return cd.getId() ;
    }

    public long createDVD(String name, String author, int releaseYear, int nbMinutes, String genre, int nbAvailable) {
        DVD dvd = DVD.builder().name(name).genre(genre).
                author(author).
                releaseYear(releaseYear).
                nbMinutes(nbMinutes).nbAvailable(nbAvailable).build() ;
        documentRepository.save(dvd) ;
        return dvd.getId() ;
    }

    public long createBook(String name, String author, int releaseYear, int nbOfPages, String genre, int nbAvailable) {
        Book book = Book.builder().name(name).author(author)
                .releaseYear(releaseYear).nbOfPages(nbOfPages)
                .genre(genre).nbAvailable(nbAvailable).build() ;
        documentRepository.save(book) ;
        return book.getId() ;
    }

    public long createBook(Book book) {
        documentRepository.save(book) ;
        return book.getId() ;
    }


}
