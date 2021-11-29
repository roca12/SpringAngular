package com.roca12.misiontic2022.spring.data.mongodb.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
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

import com.roca12.misiontic2022.spring.data.mongodb.model.Cliente;
import com.roca12.misiontic2022.spring.data.mongodb.repository.ClienteRepository;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ClienteController {

	@Autowired
	ClienteRepository clienteRepository;

	@GetMapping("/clientes")
	public ResponseEntity<List<Cliente>> getAllClientes(@RequestParam(required = false) String nombrecliente) {
		try {
			List<Cliente> clientes = new ArrayList<Cliente>();

			if (nombrecliente == null) {
				clienteRepository.findAll().forEach(clientes::add);
			} else {
				clienteRepository.findByNombrecliente(nombrecliente).forEach(clientes::add);
			}

			if (clientes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(clientes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/clientes/id/{id}")
	public ResponseEntity<Cliente> getClienteById(@PathVariable("id") String id) {
		Optional<Cliente> clienteData = clienteRepository.findById(id);

		if (clienteData.isPresent()) {
			return new ResponseEntity<>(clienteData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	@GetMapping("/clientes/nombre/{nombre}")
	public ResponseEntity<Cliente> getClienteByNombrecliente(@PathVariable("nombre") String nombre) {
		Cliente aux=clienteRepository.findByNombrecliente(nombre).get(0);
		Optional<Cliente> clienteData =  Optional.of(aux);

		if (clienteData.isPresent()) {
			return new ResponseEntity<>(clienteData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	@GetMapping("/clientes/email/{email}")
	public ResponseEntity<Cliente> getClienteByEmailcliente(@PathVariable("email") String email) {
		Cliente aux=clienteRepository.findByEmailcliente(email).get(0);
		Optional<Cliente> clienteData =  Optional.of(aux);

		if (clienteData.isPresent()) {
			return new ResponseEntity<>(clienteData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	@GetMapping("/clientes/cedula/{cedula}")
	public ResponseEntity<Cliente> getClienteByCedula(@PathVariable("cedula") Long cedula) {
		Cliente aux=clienteRepository.findByCedulacliente(cedula).get(0);
		Optional<Cliente> clienteData =  Optional.of(aux);

		if (clienteData.isPresent()) {
			return new ResponseEntity<>(clienteData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@PostMapping("/clientes")
	public ResponseEntity<Cliente> createCliente(@RequestBody Cliente client) {
		try {
			Cliente _cliente = clienteRepository.save(
					new Cliente(
							client.getCedulacliente(),
							client.getDireccioncliente(),
							client.getEmailcliente(),
							client.getNombrecliente(),
							client.getTelefonocliente()));
			return new ResponseEntity<>(_cliente, HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<>(null, HttpStatus.IM_USED);
		}catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//RECOMENDACIÓN, ENVIAR JSON SIN ID PERO EL SI ES OBLIGATORIO EN LA URL
	@PutMapping("/clientes/id/{id}")
	public ResponseEntity<Cliente> updateClienteById(@PathVariable("id") String id, @RequestBody Cliente client) {
		Optional<Cliente> clienteData = clienteRepository.findById(id);

		if (clienteData.isPresent()) {
			Cliente _cliente = clienteData.get();
			_cliente.setCedulacliente(client.getCedulacliente());
			_cliente.setDireccioncliente(client.getDireccioncliente());
			_cliente.setEmailcliente(client.getEmailcliente());
			_cliente.setNombrecliente(client.getNombrecliente());
			_cliente.setTelefonocliente(client.getTelefonocliente());

			
			return new ResponseEntity<>(clienteRepository.save(_cliente), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	@PutMapping("/clientes/cedula/{cedula}")
	public ResponseEntity<Cliente> updateClienteByCedula(@PathVariable("cedula") long cedula, @RequestBody Cliente client) {
		Cliente aux=clienteRepository.findByCedulacliente(cedula).get(0);
		Optional<Cliente> clienteData =  Optional.of(aux);

		if (clienteData.isPresent()) {
			Cliente _cliente = clienteData.get();
			_cliente.setCedulacliente(client.getCedulacliente());
			_cliente.setDireccioncliente(client.getDireccioncliente());
			_cliente.setEmailcliente(client.getEmailcliente());
			_cliente.setNombrecliente(client.getNombrecliente());
			_cliente.setTelefonocliente(client.getTelefonocliente());

			
			return new ResponseEntity<>(clienteRepository.save(_cliente), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@DeleteMapping("/clientes/id/{id}")
	public ResponseEntity<HttpStatus> deleteClientesById(@PathVariable("id") String id) {
		try {
			clienteRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/clientes/cedula/{cedula}")
	public ResponseEntity<HttpStatus> deleteClientesByCedula(@PathVariable("cedula") long cedula) {
		try {
			clienteRepository.deleteByCedulacliente(cedula);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/clientes/nombre/{nombre}")
	public ResponseEntity<HttpStatus> deleteClientesByNombre(@PathVariable("nombre") String nombre) {
		try {
			clienteRepository.deleteByNombrecliente(nombre);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/clientes/email/{email}")
	public ResponseEntity<HttpStatus> deleteClientesByEmail(@PathVariable("email") String email) {
		try {
			clienteRepository.deleteByEmailcliente(email);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/clientes")
	public ResponseEntity<HttpStatus> deleteAllClientess() {
		try {
			clienteRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/clientes/{clientname}")
	public ResponseEntity<List<Cliente>> findByNombrecliente(@PathVariable("clientname") String nombre) {
		try {
			List<Cliente> clientes = clienteRepository.findByNombrecliente(nombre);

			if (clientes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(clientes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
