package com.grupo39.misiontic2022.ciclo4.Tiburones39.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.grupo39.misiontic2022.ciclo4.Tiburones39.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{
	
	List<Usuario> findByUsername(String username);
	
	List<Usuario> findByNombre_completo(String nombre_completo);

}
