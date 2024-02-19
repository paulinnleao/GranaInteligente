package com.conta;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "conta")
public @Data class Conta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "conta_id")
    private Integer id;

    @Column(name = "descricao_conta")
    private String conta;

    @Column(name = "saldo_inicial")
    private Double saldoInicial;

    @Column(name = "moeda")
    private String moeda;

    @Column(name = "posicao")
    private Integer posicao;

    @Column(name = "cambio")
    private Double cambio;

    @Column(name = "recebido")
    private Double recebido;

    @Column(name = "pago")
    private Double pago;

    @Column(name = "saldo_atual")
    private Double saldo;

    @Column(name = "receber")
    private Double receber;

    @Column(name = "pagar")
    private Double pagar;

    @Column(name = "saldo_projetado")
    private Double saldoProjetado;
}
