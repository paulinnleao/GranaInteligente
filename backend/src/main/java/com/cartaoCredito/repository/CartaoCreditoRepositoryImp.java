package com.cartaoCredito.repository;

import com.cartaoCredito.CartaoCredito;

import java.util.List;

public class CartaoCreditoRepositoryImp implements CartaoCreditoRepository{

    public List<CartaoCredito> buscarCartoes(){
        return findAll().list();
    }
}
