package com.categoria;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "categoria")
public class Categoria {

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
