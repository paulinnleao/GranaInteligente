package com.categoria.mapper;

import com.categoria.Categoria;
import com.categoria.dto.CategoriaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "cdi")
public interface CategoriaMapper {

    @Mappings({
            @Mapping(target = "id", source = "id"),
            @Mapping(target = "categoria", source = "categoria"),
            @Mapping(target = "tipo", source = "tipo"),
            @Mapping(target = "subCategoria", source = "subCategoria")
    })
    CategoriaDTO categoriaToCategoriaDTO(Categoria entity);

    List<CategoriaDTO> listaCategoriaToListaCategoriaDTO(List<Categoria> lista);

}
