import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user
  pass:string
  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log('login', this['user'], this['pass']);
    //test logic
    //this['serverLogin'](this['user'], this['pass'])
    this.serverLogin(this['user'], this['pass'])


  }

  serverLogin(user:string, pass:string):Observable<number>{
    return timer(250);
  }

}
