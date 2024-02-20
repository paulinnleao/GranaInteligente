package com.categoria.repository;

import com.categoria.Categoria;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import java.util.List;

public interface CategoriaRepository extends PanacheRepositoryBase<Categoria, Integer> {

    List<Categoria> buscarCategorias();
}
