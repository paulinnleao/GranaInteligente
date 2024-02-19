package com.conta.rest;

import com.conta.Conta;
import com.conta.service.ContaService;
import com.conta.service.ContaServiceImp;
import jakarta.ws.rs.core.Response;
import net.bytebuddy.asm.Advice;

import java.util.List;

public class ContaRestImp implements ContaRest{

    import ContaServiceImp contaServiceImp;
    @Override
    public Response buscarConta() {
        List<Conta> conta = contaServiceImp.buscarConta();
        return Response.ok(conta).build();
    }
}
