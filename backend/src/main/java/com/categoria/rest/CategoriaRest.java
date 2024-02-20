package com.categoria.rest;

import io.quarkus.hibernate.validator.runtime.interceptor.MethodValidated;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;


@Path(CategoriaRest.PATH)
@MethodValidated
public interface CategoriaRest {
    String PATH = "/categoria";

    @GET
    Response buscarCategorias();
}
