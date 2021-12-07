package com.roca12.misiontic2022.spring.data.mongodb.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roca12.misiontic2022.spring.data.mongodb.model.Producto;
import com.roca12.misiontic2022.spring.data.mongodb.repository.ProductoRepository;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProductoController {

	@Autowired
	ProductoRepository productoRepository;

	@GetMapping("/productos")
	public ResponseEntity<List<Producto>> getAllProductos(@RequestParam(required = false) String nombreproducto) {
		try {
			List<Producto> productos = new ArrayList<Producto>();

			if (nombreproducto == null) {
				productoRepository.findAll().forEach(productos::add);
			} else {
				productoRepository.findByNombreproducto(nombreproducto).forEach(productos::add);
			}

			if (productos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(productos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/productos/{id}")
	public ResponseEntity<Producto> getProductoById(@PathVariable("id") String id) {
		Optional<Producto> productoData = productoRepository.findById(id);

		if (productoData.isPresent()) {
			return new ResponseEntity<>(productoData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/productos")
	public ResponseEntity<Producto> createProducto(@RequestBody Producto product) {
		try {
			Producto _producto = productoRepository.save(
					new Producto(product.getCodigoproducto(), product.getIvacompra(), product.getNitproveedor(), product.getNombreproducto(),
							product.getPreciocompra(), product.getPrecioventa()));
			return new ResponseEntity<>(_producto, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/productos/{id}")
	public ResponseEntity<Producto> updateProducto(@PathVariable("id") String id, @RequestBody Producto user) {
		Optional<Producto> productoData = productoRepository.findById(id);

		if (productoData.isPresent()) {
			Producto _producto = productoData.get();
			_producto.setCodigoproducto(user.getCodigoproducto());
			_producto.setIvacompra(user.getIvacompra());
			_producto.setNitproveedor(user.getNitproveedor());
			_producto.setNombreproducto(user.getNombreproducto());
			_producto.setPreciocompra(user.getPreciocompra());
			_producto.setPrecioventa(user.getPrecioventa());
			
			return new ResponseEntity<>(productoRepository.save(_producto), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/productos/{id}")
	public ResponseEntity<HttpStatus> deleteProductos(@PathVariable("id") String id) {
		try {
			productoRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/productos")
	public ResponseEntity<HttpStatus> deleteAllProductoss() {
		try {
			productoRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/productos/codigo/{codigo}")
	public ResponseEntity<List<Producto>> findByCodigo(@PathVariable("codigo") long codigo) {
		try {
			List<Producto> productos = productoRepository.findByCodigoproducto(codigo);

			if (productos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(productos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
