package com.conta.repository;

import com.conta.Conta;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import java.util.List;

public interface ContaRepository extends PanacheRepositoryBase<Conta, Integer> {

    List<Conta> buscarConta();

}
