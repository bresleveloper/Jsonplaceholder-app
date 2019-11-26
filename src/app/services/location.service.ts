import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  username
  pages = ['login','homepage','albums',
  'posts','todos','users','angular\'s life',]

  //CurrentLocation:string = 'homepage'//'login'
  CurrentLocation:string = 'angular\'s life'//'login'

  changeLocation(newLocation:string){
    console.log('changeLocation', newLocation);
    this.CurrentLocation = newLocation
  }

  
}
