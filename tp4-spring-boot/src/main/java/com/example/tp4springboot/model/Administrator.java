package com.example.tp4springboot.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@Data
@Builder
@NoArgsConstructor
public class Administrator extends Account {

    public int getNbMonthlyBorrowing() {
        return -1 ;
    }

    public double getMonthlyLateFees() {
        return -1 ;
    }
}
