package com.conta.rest;


import io.quarkus.hibernate.validator.runtime.interceptor.MethodValidated;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path(ContaRest.PATH)
@MethodValidated
public interface ContaRest {
    String PATH = "/conta";

    @GET
    Response buscarConta();
}
