package com.projeto.hotelaria.model;

public class Quarto {

    private int numero;
    private int capacidade;
    private float valor_diaria;

    public Quarto(int numero, int capacidade, float valor_diaria) {
        this.numero = numero;
        this.capacidade = capacidade;
        this.valor_diaria = valor_diaria;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public int getCapacidade() {
        return capacidade;
    }

    public void setCapacidade(int capacidade) {
        this.capacidade = capacidade;
    }

    public float getValor_diaria() {
        return valor_diaria;
    }

    public void setValor_diaria(float valor_diaria) {
        this.valor_diaria = valor_diaria;
    }
}
