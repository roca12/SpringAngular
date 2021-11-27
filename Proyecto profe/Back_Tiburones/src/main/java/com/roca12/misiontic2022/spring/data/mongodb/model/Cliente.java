package com.roca12.misiontic2022.spring.data.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clientes")
public class Cliente {
	
	@Id
	private String id ;
	
	@Indexed(unique=true)
	private long cedulacliente;
	private String direccioncliente;
	private String emailcliente;
	private String nombrecliente;
	private String telefonocliente;
	
	public Cliente() {
		
	}

	public Cliente(long cedulacliente, String direccioncliente, String emailcliente, String nombrecliente,
			String telefonocliente) {
		super();
		this.cedulacliente = cedulacliente;
		this.direccioncliente = direccioncliente;
		this.emailcliente = emailcliente;
		this.nombrecliente = nombrecliente;
		this.telefonocliente = telefonocliente;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public long getCedulacliente() {
		return cedulacliente;
	}

	public void setCedulacliente(long cedulacliente) {
		this.cedulacliente = cedulacliente;
	}

	public String getDireccioncliente() {
		return direccioncliente;
	}

	public void setDireccioncliente(String direccioncliente) {
		this.direccioncliente = direccioncliente;
	}

	public String getEmailcliente() {
		return emailcliente;
	}

	public void setEmailcliente(String emailcliente) {
		this.emailcliente = emailcliente;
	}

	public String getNombrecliente() {
		return nombrecliente;
	}

	public void setNombrecliente(String nombrecliente) {
		this.nombrecliente = nombrecliente;
	}

	public String getTelefonocliente() {
		return telefonocliente;
	}

	public void setTelefonocliente(String telefonocliente) {
		this.telefonocliente = telefonocliente;
	}
	
	
	

}
