package com.skilldistillery.getinked.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.getinked.entities.Tattoo;
import com.skilldistillery.getinked.repositories.TattooRepository;

@Service
public class TattooServiceImpl implements TattooService {
	
	@Autowired
	private TattooRepository tatRepo;

	@Override
	public List<Tattoo> getAllTattos() {
		// TODO Auto-generated method stub
		return tatRepo.findAll();
	}

	@Override
	public Tattoo getTattooById(int tatId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Tattoo create(Tattoo tat) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Tattoo update(int tatId, Tattoo tat) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int tatId) {
		// TODO Auto-generated method stub
		return false;
	}

}
