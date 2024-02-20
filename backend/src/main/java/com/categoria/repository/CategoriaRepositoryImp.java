package com.categoria.repository;

import com.categoria.Categoria;

import java.util.List;

import static io.quarkus.hibernate.orm.panache.PanacheEntityBase.findAll;

public class CategoriaRepositoryImp implements CategoriaRepository{

    public List<Categoria> buscarCategorias(){
        return findAll().list();
    }
}
