package com.equipox.misiontic2022.tiendasgenericas.tiendaslostiburones.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usuarios")
public class Usuario {
	
	@Id
	private String id;
	
	private String username;
	
	private String password;
	
	private String nombreusuario;
	
	private String emailusuario;
	
	
	public Usuario() {
		
	}
	
	
	public Usuario(String username, String password, String nombreusuario, String emailusuario) {
		super();
		this.username = username;
		this.password = password;
		this.nombreusuario = nombreusuario;
		this.emailusuario = emailusuario;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNombreusuario() {
		return nombreusuario;
	}

	public void setNombreusuario(String nombreusuario) {
		this.nombreusuario = nombreusuario;
	}

	public String getEmailusuario() {
		return emailusuario;
	}

	public void setEmailusuario(String emailusuario) {
		this.emailusuario = emailusuario;
	}
	
	
	
	
	

}
