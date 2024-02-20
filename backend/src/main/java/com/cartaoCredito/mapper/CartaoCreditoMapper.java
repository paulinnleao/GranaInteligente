package com.cartaoCredito.mapper;

import com.cartaoCredito.CartaoCredito;
import com.cartaoCredito.dto.CartaoCreditoDTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "cdi")
public interface CartaoCreditoMapper {

    CartaoCreditoDTO cartaoToCartaoDTO(CartaoCredito entity);

    List<CartaoCreditoDTO> listaCartaoCreditoToListaCartaoCreditoDTO(List<CartaoCredito> lista);
}
