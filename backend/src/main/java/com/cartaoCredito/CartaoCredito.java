package com.cartaoCredito;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="cartao_de_credito")
public @Data class CartaoCredito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cc_id")
    private Integer id;

    @Column(name = "descricao_cc")
    private String cartao;

    @Column(name = "fechamento")
    private Integer fechamento;

    @Column(name = "vencimento")
    private Integer vencimento;

    @Column(name = "limite")
    private Double limite;

    @Column(name = "moeda")
    private String moeda;

    @Column(name = "lancamento")
    private Double lancamento;

    @Column(name = "disponivel")
    private Double disponivel;
}
