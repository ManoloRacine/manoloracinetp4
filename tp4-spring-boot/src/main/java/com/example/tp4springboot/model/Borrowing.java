package com.example.tp4springboot.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
public class Borrowing {
    @Id
    @GeneratedValue
    public long id ;
    public LocalDateTime locationDate ;
    public LocalDateTime returnDate ;

    @ManyToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    public Document borrowedDocument ;
}
