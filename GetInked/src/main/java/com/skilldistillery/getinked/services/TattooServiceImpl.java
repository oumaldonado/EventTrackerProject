package com.skilldistillery.getinked.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.getinked.entities.Tattoo;
import com.skilldistillery.getinked.repositories.TattooRepository;

@Service
public class TattooServiceImpl implements TattooService {
	
	@Autowired
	private TattooRepository tatRepo;

	@Override
	public List<Tattoo> getAllTattoos() {
		return tatRepo.findAll();
	}

	@Override
	public Tattoo getTattooById(int tatId) {
		
		return tatRepo.searchById(tatId);
	}

	@Override
	public Tattoo create(Tattoo tat) {
		
		return tatRepo.saveAndFlush(tat);
	}

	@Override
	public Tattoo update(int tatId, Tattoo tat) {
		
		Tattoo updatedtat = tatRepo.searchById(tatId);
		
		
            updatedtat.setDesignName(tat.getDesignName());
            updatedtat.setArtist(tat.getArtist());
            updatedtat.setMeaning(tat.getMeaning());
            updatedtat.setStyle(tat.getStyle());
            updatedtat.setImageUrl(tat.getImageUrl());
           
            tatRepo.save(updatedtat);
           return updatedtat;
           

       
        	
        	
        
		
	}

	@Override
	public boolean deleteById(int tatId) {
		boolean isComplete = false;
		Tattoo toBeDeleted = tatRepo.searchById(tatId);
		
		if (toBeDeleted != null) {
			toBeDeleted.setEnabled(false);
			tatRepo.save(toBeDeleted);
			isComplete =  true;
		}
		return isComplete;
			
	}

	
	 

	@Override
	public List<Tattoo> getEnabledTattoos() {
		
		return tatRepo.findByEnabled(true);
	}

	@Override
	public Optional<Tattoo> getEnabledTattoosById(int tatId) {
		
		return tatRepo.findByIdAndEnabled(tatId, true);
	}

}
