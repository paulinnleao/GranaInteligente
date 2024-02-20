package com.conta.service;

import com.conta.dto.ContaDTO;

import java.util.List;

public interface ContaService {

    List<ContaDTO> buscarConta() throws Exception;
}
