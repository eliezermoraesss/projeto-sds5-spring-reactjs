package com.devsuperior.eliezer.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.eliezer.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
