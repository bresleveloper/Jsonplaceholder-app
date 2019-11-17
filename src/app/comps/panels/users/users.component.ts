import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'panel-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[] = []
  constructor(public svc:UserService, private loc:LocationService) { }

  ngOnInit() {
    this.svc.getUsers()
      .subscribe(data => this.users = data)
  }

  selectUser(u:User){
    this.svc.selectedUser = u
    this.loc.location = 'userOptions'
  }

}
