import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = 'moshe'
  pass:string

  numy:number = 1;
  incnumy(){
    this.numy++
  }  

  constructor(private loc:LocationService) { }

  ngOnInit() {
    setInterval(()=> this.numy++, 500)
  }

  login(){/*
    let nameField = 'user'
    this[nameField]
    this['user']
    this.user*/
    console.log('login', this['user'], this['pass']);
    //test logic
    //this['serverLogin'](this['user'], this['pass'])
    this.serverLogin(this['user'], this['pass'])
      .subscribe(result => {
        this.numy = result
        this.loc.username = this.user
        this.loc.changeLocation('homepage')
      })


  }

  serverLogin(user:string, pass:string):Observable<number>{
    return timer(250);
  }

}
