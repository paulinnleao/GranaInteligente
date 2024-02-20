package com.conta.mapper;

import com.conta.Conta;
import com.conta.dto.ContaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "cdi")
public interface ContaMapper {

    ContaDTO contaToContaDTO(Conta entity);

    List<ContaDTO> listaContaToListaContaDTO(List<Conta> lista);
}
