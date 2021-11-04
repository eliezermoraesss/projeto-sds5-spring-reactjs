package com.devsuperior.eliezer.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.eliezer.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{
	
}
