package com.skilldistillery.getinked.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.getinked.entities.Tattoo;

public interface TattooService {
	List<Tattoo> getAllTattoos();
	List<Tattoo> getEnabledTattoos();
	Optional<Tattoo> getEnabledTattoosById(int tatId);
	Tattoo getTattooById(int tatId);
	Tattoo create (Tattoo tat);
	Tattoo update(int tatId, Tattoo tat);
	boolean deleteById(int tatId);
	

}
