package com.roca12.misiontic2022.spring.data.mongodb.model;

public class DetalleVenta {
	
	private long cantidadproducto;
	private long codigoproducto;
	private double valortotal;
	private double valorventa;
	private double valoriva;
	
	public DetalleVenta() {
		
	}

	public DetalleVenta(long cantidadproducto, long codigoproducto, double valortotal, double valorventa,
			double valoriva) {
		super();
		this.cantidadproducto = cantidadproducto;
		this.codigoproducto = codigoproducto;
		this.valortotal = valortotal;
		this.valorventa = valorventa;
		this.valoriva = valoriva;
	}

	public long getCantidadproducto() {
		return cantidadproducto;
	}

	public void setCantidadproducto(long cantidadproducto) {
		this.cantidadproducto = cantidadproducto;
	}

	public long getCodigoproducto() {
		return codigoproducto;
	}

	public void setCodigoproducto(long codigoproducto) {
		this.codigoproducto = codigoproducto;
	}

	public double getValortotal() {
		return valortotal;
	}

	public void setValortotal(double valortotal) {
		this.valortotal = valortotal;
	}

	public double getValorventa() {
		return valorventa;
	}

	public void setValorventa(double valorventa) {
		this.valorventa = valorventa;
	}

	public double getValoriva() {
		return valoriva;
	}

	public void setValoriva(double valoriva) {
		this.valoriva = valoriva;
	}
	
	

}
