package com.example.tp4springboot.dto;

import com.example.tp4springboot.model.Borrowing;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class SimpleBorrowingDTO {
    private long id ;
    private LocalDateTime locationDate ;
    private LocalDateTime returnDate ;
    private String name ;

    public static SimpleBorrowingDTO fromBorrowing(Borrowing borrowing) {
        return SimpleBorrowingDTO.builder().id(borrowing.getId()).name(borrowing.getBorrowedDocument().getName()).
                locationDate(borrowing.getLocationDate()).returnDate(borrowing.getReturnDate()).build() ;
    }
}
