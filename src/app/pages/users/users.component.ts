import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]

  constructor(public svc:UserService) { 
  }

  ngOnInit() {
    //this.svc.getUsers2()
    //this.svc.getUsers().subscribe(data => this.users = data)
    this.svc.myData.subscribe(data =>{
      this.users = data
      console.log('UsersComponent myData.subscribe ', data);
      
    })

  }

}
