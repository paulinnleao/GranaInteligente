package com.categoria;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "categoria")
public @Data class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categoria_id")
    private Integer id;

    @Column(name = "descricao_categoria")
    private String categoria;

    @Column(name = "tipo_categoria")
    private String tipo;

    @Column(name = "categoria_id_referencia")
    private Integer subCategoria;
}
