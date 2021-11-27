package com.roca12.misiontic2022.spring.data.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usuarios")
public class Producto {

	@Id
	private String id;
	
	@Indexed(unique=true)
	private Long codigoproducto;
	private Double ivacompra;
	private Long nitproveedor;
	private String nombreproducto;
	private Double preciocompra;
	private Double precioventa;

	public Producto() {

	}

	public Producto(Long codigoproducto, Double ivacompra, Long nitproveedor, String nombreproducto,
			Double preciocompra, Double precioventa) {
		super();
		this.codigoproducto = codigoproducto;
		this.ivacompra = ivacompra;
		this.nitproveedor = nitproveedor;
		this.nombreproducto = nombreproducto;
		this.preciocompra = preciocompra;
		this.precioventa = precioventa;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Long getCodigoproducto() {
		return codigoproducto;
	}

	public void setCodigoproducto(Long codigoproducto) {
		this.codigoproducto = codigoproducto;
	}

	public Double getIvacompra() {
		return ivacompra;
	}

	public void setIvacompra(Double ivacompra) {
		this.ivacompra = ivacompra;
	}

	public Long getNitproveedor() {
		return nitproveedor;
	}

	public void setNitproveedor(Long nitproveedor) {
		this.nitproveedor = nitproveedor;
	}

	public String getNombreproducto() {
		return nombreproducto;
	}

	public void setNombreproducto(String nombreproducto) {
		this.nombreproducto = nombreproducto;
	}

	public Double getPreciocompra() {
		return preciocompra;
	}

	public void setPreciocompra(Double preciocompra) {
		this.preciocompra = preciocompra;
	}

	public Double getPrecioventa() {
		return precioventa;
	}

	public void setPrecioventa(Double precioventa) {
		this.precioventa = precioventa;
	}

}
