package com.skilldistillery.getinked.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.getinked.entities.Tattoo;
import com.skilldistillery.getinked.services.TattooService;

@RestController
@RequestMapping("api")
public class TattooController {
	
	
	@Autowired
	private TattooService ts;
	
	@GetMapping("tattoos")
	public List<Tattoo> index(){
		
		List<Tattoo> tats = ts.getAllTattos();
		return tats;
	}
	

}
