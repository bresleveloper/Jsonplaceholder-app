import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private api = 'https://jsonplaceholder.typicode.com/photos/'
  selectedPhoto:Photo
  constructor(private http:HttpClient) {}

  getPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.api)
  }

  getPhoto(id:number):Observable<Photo>{
    return this.http.get<Photo>(this.api + id)
  }

  getLastPhotos():Observable<Photo[]>{
    let u = this.api + '?'
    for (let i = 4990; i < 5000; i++) {
      u += `id=${i}&`// "id=" + i + "&"
    }
    return this.http.get<Photo[]>(u)
  }
}
