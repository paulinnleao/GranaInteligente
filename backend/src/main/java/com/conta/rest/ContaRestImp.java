package com.conta.rest;

import com.conta.dto.ContaDTO;
import com.conta.service.ContaServiceImp;
import jakarta.ws.rs.core.Response;

import java.util.List;

public class ContaRestImp implements ContaRest{

    ContaServiceImp contaServiceImp;
    @Override
    public Response buscarConta() {
        List<ContaDTO> conta = contaServiceImp.buscarConta();
        return Response.ok(conta).build();
    }
}
