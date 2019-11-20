import { Injectable } from '@angular/core';
import { Album } from '../model/album';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private api = 'https://jsonplaceholder.typicode.com/albums/'
  selectedAlbum:Album
  constructor(private http:HttpClient) {}

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.api)
  }

  getAlbum(id:number):Observable<Album>{
    return this.http.get<Album>(this.api + id)
  }
}
