package com.skilldistillery.getinked.entities;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class TattooTest {
	
	private  static EntityManagerFactory emf;
	
	private EntityManager em;
	
	private Tattoo tattoo;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf= Persistence.createEntityManagerFactory("JPAGetInked");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		tattoo = em.find(Tattoo.class, 1);
		
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		tattoo = null;
		
	}

	@Test
	void test() {
		assertNotNull(tattoo);
		assertEquals("Joe Blow", tattoo.getArtist());;
		
	}

}
