import { Component, OnInit } from '@angular/core';
import { RicknmortyService } from '../../services/ricknmorty.service';
import { Episode } from '../../Interfaces/episode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-episodes',
  templateUrl: './table-episodes.component.html',
  styleUrl: './table-episodes.component.css'
})
export class TableEpisodesComponent implements OnInit{
episodes : Episode[] = [];

constructor (
  private service: RicknmortyService,
  private router: Router
) {} 

ngOnInit(): void {
    this.service.getEpisodes().subscribe(
      response => {
        this.episodes = response.results;
      }
    )
}

viewEpisodeDetails(id: number): void {
  console.log(`Ver detalles del episodio con ID: ${id}`);
  this.router.navigate(["/personajes"]);
} 
}
