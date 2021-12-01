package com.roca12.misiontic2022.spring.data.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "consolidado")
public class Consolidado {
	
	@Id
	private String id;
	private String ciudad;
	private Long totalventas;
	
	public Consolidado() {

	}

	public Consolidado(String ciudad, Long totalventas) {
		super();
		this.ciudad = ciudad;
		this.totalventas = totalventas;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public Long getTotalventas() {
		return totalventas;
	}

	public void setTotalventas(Long totalventas) {
		this.totalventas = totalventas;
	}
	
	
}
