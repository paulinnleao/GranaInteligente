package com.cartaoCredito.repository;

import com.cartaoCredito.CartaoCredito;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import java.util.List;

public interface CartaoCreditoRepository extends PanacheRepositoryBase<CartaoCredito, Integer> {

    List<CartaoCredito> buscarCartoes();
}
