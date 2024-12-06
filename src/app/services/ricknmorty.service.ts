import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
import { Characters } from '../Interfaces/characters';
import { Episode } from '../Interfaces/episode';

@Injectable({
  providedIn: 'root'
})
export class RicknmortyService {

  constructor(
    private http: HttpClient
  ) { }

  private baseURL = "https://rickandmortyapi.com/api";


  // RUTAS PARA LUGARES
  getLocations():Observable<{Results: Location[]}> {
    return this.http.get<{Results: Location[]}>(`${this.baseURL}/location`);
  }

  getLocationByCharacter(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseURL}/character/${id}`);
  }

  // RUTAS PARA EPISODIOS
  getEpisodes(): Observable< {results: Episode[]} >{
    return this.http.get< {results: Episode[]} >(`${this.baseURL}/episode`);
  }

  getEpisodeDetails(id: number): Observable<Episode & { characters: string[] }> {
    return this.http.get<Episode & { characters: string[] }>(`${this.baseURL}/episode/${id}`);
  }

  getCharacterDetails(urls: string[]): Observable<Characters[]> {
    const requests = urls.map(url => this.http.get<Characters>(url));
    return forkJoin(requests);
  }
}
