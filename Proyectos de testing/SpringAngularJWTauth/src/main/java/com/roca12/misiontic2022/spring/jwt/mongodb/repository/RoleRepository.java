package com.roca12.misiontic2022.spring.jwt.mongodb.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.roca12.misiontic2022.spring.jwt.mongodb.models.ERole;
import com.roca12.misiontic2022.spring.jwt.mongodb.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
