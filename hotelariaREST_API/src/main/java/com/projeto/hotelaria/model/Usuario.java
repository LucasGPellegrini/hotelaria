package com.projeto.hotelaria.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name="usuarios")
public class Usuario {

    @Id
    private String cpf;
    private String nome;
    private LocalDate data_nascimento;

    public Usuario(String cpf, String nome, LocalDate data_nascimento) {
        this.cpf = cpf;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
    }

    public Usuario() {

    }

    public String getCpf() {
        return cpf;
    }

    public String getNome() {
        return nome;
    }

    public LocalDate getData_nascimento() {
        return data_nascimento;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setData_nascimento(LocalDate data_nascimento) {
        this.data_nascimento = data_nascimento;
    }
}