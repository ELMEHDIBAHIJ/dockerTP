package com.example.demo;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import jakarta.persistence.Entity;


import lombok.RequiredArgsConstructor;
@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class Proprietaire {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @NonNull
    private String nom;
    @NonNull
    private String prenom;
}
