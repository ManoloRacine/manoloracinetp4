package com.example.tp4springboot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@SuperBuilder
public class Client extends Account {
    private double totalLateFees ;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Borrowing> borrowings = new ArrayList<>();


    public void borrowDocument(Borrowing borrowing) {
        borrowings.add(borrowing) ;
    }
}
