import { CommonModule } from '@angular/common';
import { Tattoo } from '../../models/tattoo';
import { TattooService } from './../../services/tattoo.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtistPipe } from '../../pipes/artist.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ArtistPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  tattoos: Tattoo[] = [];
  newTattoo: Tattoo | null = null;
  editTattoo: Tattoo | null = null;
  selected: Tattoo | null = null;
  showAddForm = false;
  artists: String[] = [];
  selectedArtist = 'All';

  constructor(private tattooService: TattooService) {}
  ngOnInit(): void {
    this.loadTattoos();
  }

  loadTattoos() {
    this.tattooService.index().subscribe({
      next: (tattooList) => {
        this.tattoos = tattooList;
        let artists = tattooList.map((t) => t.artist);
        console.log(artists);
        let setOfArtists = new Set(artists);
        console.log(setOfArtists);
        this.artists = [...setOfArtists];
        this.artists.unshift('All');
      },
      error: (shoot) => {
        console.log('Tattoo component.loadTattoos.error');
      },
    });
  }
  addTattoo(newTattoo: Tattoo) {
    this.tattooService.create(newTattoo).subscribe({
      next: (createdTodo) => {
        this.loadTattoos();
        this.newTattoo = new Tattoo();
      },
      error: (oops) => {
        console.log('todolistcomponent.addTodo: error creating todo');
        console.log(oops);
      },
    });
    this.newTattoo = new Tattoo();
    this.loadTattoos();
  }

  setEditTattoo(tattoo: Tattoo) {
    this.editTattoo = Object.assign({}, tattoo);
  }
  setAddTattoo() {
    this.newTattoo = new Tattoo();
  }
  updateTattoo(editTattoo: Tattoo) {
    this.tattooService.update(editTattoo).subscribe({
      next: (updatedTodo) => {
        this.editTattoo = null;

        this.selected = null;

        this.loadTattoos();
      },
      error: (oops) => {
        console.log(
          'tattoocomponent.updateTattoo: error editing Tattoo Named:' +
            editTattoo.designName
        );
        console.log(oops);
      },
    });
  }

  deleteTattoo(id: number) {
    this.tattooService.destroy(id).subscribe({
      next: (tattooList) => {
        this.loadTattoos();
      },
      error: (fail) => {
        console.log(
          'TattooComponent.deleteTattoo: error editing Tattoo Id:' + id
        );
        console.log(fail);
      },
    });
  }
}
