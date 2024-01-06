package com.skilldistillery.getinked.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.getinked.entities.Tattoo;

public interface TattooRepository extends JpaRepository<Tattoo, Integer> {

}
