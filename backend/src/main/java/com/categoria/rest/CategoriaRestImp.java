package com.categoria.rest;

import com.categoria.service.CategoriaServiceImp;
import jakarta.ws.rs.core.Response;

public class CategoriaRestImp implements CategoriaRest{

    CategoriaServiceImp categoriaServiceImp;

    @Override
    public Response buscarCategorias() {
        return Response.ok(categoriaServiceImp.buscarCategorias()).build();
    }
}
