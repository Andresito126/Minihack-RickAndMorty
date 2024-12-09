import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent implements OnInit {
  characters: any[] = [];
  currentPage: number = 1;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.http
      .get(`https://rickandmortyapi.com/api/character?page=${this.currentPage}`)
      .subscribe((data: any) => {
        this.characters = data.results;
      });
  }

  nextPage() {
    this.currentPage++;
    this.loadCharacters();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  viewDetails(id: number) {
    // alert(`Detalles del personaje con ID: ${id}`);
    this.router.navigate(['/modal-location']);

  }

  goBack() {
  this.router.navigate(['']);
  }

}
