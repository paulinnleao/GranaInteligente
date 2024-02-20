package com.conta.dto;

import lombok.Data;

public @Data class ContaDTO {

    private Integer id;

    private String conta;

    private Double saldoInicial;

    private String moeda;

    private Integer posicao;

    private Double cambio;

    private Double recebido;

    private Double pago;

    private Double saldo;

    private Double receber;

    private Double pagar;

    private Double saldoProjetado;

}
