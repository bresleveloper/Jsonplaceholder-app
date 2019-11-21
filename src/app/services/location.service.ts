import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  username
  pages = ['login','homepage','albums',
  'posts','todos','users',]

  CurrentLocation:string = 'homepage'//'login'

  changeLocation(newLocation:string){
    console.log('changeLocation', newLocation);
    this.CurrentLocation = newLocation
  }

  
}
