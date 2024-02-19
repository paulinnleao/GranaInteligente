package com.conta.repository;

import com.conta.Conta;

import java.util.List;

public class ContaRepositoryImp implements ContaRepository{
    @Override
    public List<Conta> buscarConta() {
        return (List<Conta>) findAll();
    }
}
