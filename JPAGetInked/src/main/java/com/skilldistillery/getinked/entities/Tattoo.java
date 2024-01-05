package com.skilldistillery.getinked.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tattoo {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(name="design_name")
	private String designName;
	
	private String artist;
	 
	private String style;
	@CreationTimestamp
	@Column(name="date_started")
	 private LocalDateTime dateStarted;
	
	@UpdateTimestamp
	@Column(name="date_finished")
	 private LocalDateTime dateFinished;
	 
	 private boolean enabled;
	 
	 @Column(name="image_url")
	 private String imageUrl;

	public Tattoo() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDesignName() {
		return designName;
	}

	public void setDesignName(String designName) {
		this.designName = designName;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public LocalDateTime getDateStarted() {
		return dateStarted;
	}

	public void setDateStarted(LocalDateTime dateStarted) {
		this.dateStarted = dateStarted;
	}

	public LocalDateTime getDateFinished() {
		return dateFinished;
	}

	public void setDateFinished(LocalDateTime dateFinished) {
		this.dateFinished = dateFinished;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tattoo other = (Tattoo) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Tattoo [id=" + id + ", designName=" + designName + ", artist=" + artist + ", style=" + style
				+ ", dateStarted=" + dateStarted + ", dateFinished=" + dateFinished + ", enabled=" + enabled
				+ ", imageUrl=" + imageUrl + "]";
	}
	 
	 
	 
}
