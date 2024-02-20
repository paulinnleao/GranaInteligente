package com.cartaoCredito.rest;

import io.quarkus.hibernate.validator.runtime.interceptor.MethodValidated;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path(CartaoCreditoRest.PATH)
@MethodValidated
public interface CartaoCreditoRest {
    String PATH = "/cartcao-de-credito";

    @GET
    Response buscarCartoes();

}
