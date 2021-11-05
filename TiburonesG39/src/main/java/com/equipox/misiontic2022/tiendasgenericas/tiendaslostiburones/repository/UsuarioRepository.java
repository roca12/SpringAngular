package com.equipox.misiontic2022.tiendasgenericas.tiendaslostiburones.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.equipox.misiontic2022.tiendasgenericas.tiendaslostiburones.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{
   List<Usuario> findByUsername(String username);
   
   List<Usuario> findByNombre(String nombre);
}
