package com.cartaoCredito.rest;

import com.cartaoCredito.dto.CartaoCreditoDTO;
import com.cartaoCredito.service.CartaoCreditoServiceImp;
import jakarta.ws.rs.core.Response;

import java.util.List;

public class CartaoCreditoRestImp implements CartaoCreditoRest {

    CartaoCreditoServiceImp cartaoCreditoServiceImp;
    @Override
    public Response buscarCartoes(){
        List<CartaoCreditoDTO> cartaoCreditoDTO = cartaoCreditoServiceImp.buscarCartoes();
        return Response.ok(cartaoCreditoDTO).build();
    }
}
