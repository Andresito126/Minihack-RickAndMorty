import { Component, OnInit } from '@angular/core';
import { RicknmortyService } from '../../services/ricknmorty.service';
import { Episode } from '../../Interfaces/episode';

@Component({
  selector: 'app-table-episodes',
  templateUrl: './table-episodes.component.html',
  styleUrl: './table-episodes.component.css'
})
export class TableEpisodesComponent implements OnInit{
episodes : Episode[] = [];

constructor (
  private service: RicknmortyService
) {} 

ngOnInit(): void {
    this.service.getEpisodes().subscribe(
      response => {
        this.episodes = response.results;
      }
    )
}

}
