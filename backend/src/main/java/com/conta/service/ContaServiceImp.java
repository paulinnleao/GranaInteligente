package com.conta.service;

import com.conta.Conta;
import com.conta.dto.ContaDTO;
import com.conta.mapper.ContaMapper;
import com.conta.repository.ContaRepositoryImp;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;
import java.util.Objects;

@ApplicationScoped
public class ContaServiceImp implements ContaService{

    ContaRepositoryImp contaRepositoryImp;
    ContaMapper contaMapper;

    @Override
    public List<ContaDTO> buscarConta() {
        List<Conta> conta = contaRepositoryImp.buscarConta();
        return contaMapper.listaContaToListaContaDTO(conta);
    }
}
