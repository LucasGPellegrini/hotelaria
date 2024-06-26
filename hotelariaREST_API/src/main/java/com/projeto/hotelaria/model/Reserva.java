package com.projeto.hotelaria.model;

import java.time.LocalDate;

public class Reserva {

    private int numero_quarto;
    private String cpf_usuario;
    private LocalDate inicio_estadia;
    private LocalDate fim_estadia;
    public Reserva(int numero_quarto, String cpf_usuario, LocalDate inicio_estadia, LocalDate fim_estadia) {
        this.numero_quarto = numero_quarto;
        this.cpf_usuario = cpf_usuario;
        this.inicio_estadia = inicio_estadia;
        this.fim_estadia = fim_estadia;
    }

    public int getNumero_quarto() {
        return numero_quarto;
    }

    public void setNumero_quarto(int numero_quarto) {
        this.numero_quarto = numero_quarto;
    }

    public String getCpf_usuario() {
        return cpf_usuario;
    }

    public void setCpf_usuario(String cpf_usuario) {
        this.cpf_usuario = cpf_usuario;
    }

    public LocalDate getInicio_estadia() {
        return inicio_estadia;
    }

    public void setInicio_estadia(LocalDate inicio_estadia) {
        this.inicio_estadia = inicio_estadia;
    }

    public LocalDate getFim_estadia() {
        return fim_estadia;
    }

    public void setFim_estadia(LocalDate fim_estadia) {
        this.fim_estadia = fim_estadia;
    }
}
