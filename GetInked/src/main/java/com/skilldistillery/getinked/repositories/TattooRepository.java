package com.skilldistillery.getinked.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.getinked.entities.Tattoo;

public interface TattooRepository extends JpaRepository<Tattoo, Integer> {

	Tattoo searchById(int tatId);
	List<Tattoo> findByEnabled(boolean enabled);
	Optional<Tattoo> findByIdAndEnabled(int id, boolean enabled);

}
