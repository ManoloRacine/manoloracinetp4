package com.example.tp4springboot.dto;

import com.example.tp4springboot.model.Document;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SimpleDocumentDTO {
    private long id ;
    private String type ;
    private String name ;
    private String author ;
    private int nbAvailable ;

    public static SimpleDocumentDTO fromDocument(Document document) {
        return SimpleDocumentDTO.builder().id(document.getId()).type(document.getClass().getSimpleName()).
                name(document.getName()).author(document.getAuthor()).nbAvailable(document.getNbAvailable()).build() ;
    }
}
