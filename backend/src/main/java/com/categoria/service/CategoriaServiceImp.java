package com.categoria.service;

import com.categoria.Categoria;
import com.categoria.dto.CategoriaDTO;
import com.categoria.mapper.CategoriaMapper;
import com.categoria.repository.CategoriaRepositoryImp;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class CategoriaServiceImp implements CategoriaService{

    CategoriaRepositoryImp categoriaRepositoryImp;
    CategoriaMapper categoriaMapper;
    @Override
    public List<CategoriaDTO> buscarCategorias(){
        List<Categoria>  categorias = categoriaRepositoryImp.buscarCategorias();

        return categoriaMapper.listaCategoriaToListaCategoriaDTO(categorias);
    }
}
