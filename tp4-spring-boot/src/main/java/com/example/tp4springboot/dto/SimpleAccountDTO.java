package com.example.tp4springboot.dto;

import com.example.tp4springboot.model.Account;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SimpleAccountDTO {
    private long id ;
    private String type ;
    private String firstName ;
    private String lastName ;

    public static SimpleAccountDTO fromAccount(Account account) {
        return SimpleAccountDTO.builder().type(account.getClass().getSimpleName()).firstName(account.getFirstName()).
                lastName(account.getLastName()).id(account.getId()).build() ;
    }
}
