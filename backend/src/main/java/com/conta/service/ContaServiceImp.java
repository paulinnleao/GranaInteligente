package com.conta.service;

import com.conta.Conta;
import com.conta.repository.ContaRepositoryImp;

import java.util.List;

public class ContaServiceImp implements ContaService{

    import ContaRepositoryImp contaRepositoryImp;
    @Override
    public List<Conta> buscarConta() {
        List<Conta> conta = contaRepositoryImp.buscarConta();
        return conta;
    }
}
