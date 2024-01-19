import { CommonModule } from '@angular/common';
import { Tattoo } from '../../models/tattoo';
import { TattooService } from './../../services/tattoo.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  tattoos:Tattoo[] =[];



  constructor(
    private tattooService:TattooService
  ){

  }
  ngOnInit(): void {
    this.loadTattoos();
  }

  loadTattoos(){
    this.tattooService.index().subscribe({
      next:(tattooList)=> {
        this.tattoos = tattooList;

      },
      error:(shoot) => {
        console.log( 'Tattoo component.loadTattoos.error')
      }
  });

  }

}
