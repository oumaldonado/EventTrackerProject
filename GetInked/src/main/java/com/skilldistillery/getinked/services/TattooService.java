package com.skilldistillery.getinked.services;

import java.util.List;

import com.skilldistillery.getinked.entities.Tattoo;

public interface TattooService {
	List<Tattoo> getAllTattos();
	Tattoo getTattooById(int tatId);
	Tattoo create (Tattoo tat);
	Tattoo update(int tatId, Tattoo tat);
	boolean deleteById(int tatId);
	

}
