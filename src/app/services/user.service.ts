import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'https://jsonplaceholder.typicode.com/users/'
  selectedUser:User
  cachedData:User[]

  myData:BehaviorSubject<User[]> 
    = new BehaviorSubject<User[]>([])

  constructor(private http:HttpClient) {
    this.http.get<User[]>(this.api)
      .subscribe(data=> this.myData.next(data))
  }

  getUsers():Observable<User[]>{
    console.log('UserService getUsers');
    return this.http.get<User[]>(this.api)
      .pipe(tap(x=> this.cachedData = x))
  }

  getUsers2():void{
    this.http.get<User[]>(this.api)
      .subscribe(x=> this.cachedData = x)
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.api + id)
  }
}
