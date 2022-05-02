package com.example.tp4springboot.repository;

import com.example.tp4springboot.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findAllByAuthor(String author) ;
    List<Document> findAllByReleaseYear(int year) ;
    List<Document> findDocumentByGenre(String genre) ;
    List<Document> findDocumentByNameContains(String title) ;


}
