package com.cartaoCredito.service;

import com.cartaoCredito.CartaoCredito;
import com.cartaoCredito.dto.CartaoCreditoDTO;
import com.cartaoCredito.mapper.CartaoCreditoMapper;
import com.cartaoCredito.repository.CartaoCreditoRepositoryImp;

import java.util.List;

public class CartaoCreditoServiceImp implements CartaoCreditoService {

    CartaoCreditoRepositoryImp cartaoCreditoRepositoryImp;
    CartaoCreditoMapper cartaoCreditoMapper;
    public List<CartaoCreditoDTO> buscarCartoes(){
        List<CartaoCredito> cartaoCredito = cartaoCreditoRepositoryImp.buscarCartoes();
        return cartaoCreditoMapper.listaCartaoCreditoToListaCartaoCreditoDTO(cartaoCredito);
    }
}
