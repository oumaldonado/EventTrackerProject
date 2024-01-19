package com.skilldistillery.getinked.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.getinked.entities.Tattoo;
import com.skilldistillery.getinked.services.TattooService;

import jakarta.servlet.http.HttpServletResponse;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class TattooController {

	@Autowired
	private TattooService ts;
	
	

	@GetMapping("tattoos")
	public List<Tattoo> index() {

		List<Tattoo> tats = ts.getEnabledTattoos();

		return tats;
	}
	
	@GetMapping("tattoos/{id}")
	public  Optional<Tattoo> show(@PathVariable("id") Integer id, HttpServletResponse res) {
		Optional<Tattoo> tat= ts.getEnabledTattoosById(id);
		
		return tat;
		
	}
	@PostMapping("tattoos")
	public Tattoo create(@RequestBody Tattoo tattoo) {
		
		ts.create(tattoo);
		
		return tattoo;
		
	}
	@PutMapping("tattoos/{id}")
	public Tattoo update(@PathVariable("id")Integer id, @RequestBody Tattoo tat, HttpServletResponse res) {
		Tattoo updatedTat = null;
		try {
			updatedTat = ts.update(id, tat);
			if(updatedTat == null) {
				res.setStatus(404);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			
		}
		return updatedTat;
		
	}
	
	@DeleteMapping("tattoos/{id}")
	public void delete(@PathVariable("id") Integer id, HttpServletResponse res) {
		Tattoo tat = ts.getTattooById(id);
		try {
			if (tat.isEnabled() == true) {
				ts.deleteById(id);
				res.setStatus(204);
				
			}
			else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
	}

}
