import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() listUsers: any[];

  constructor(
    private userService: UserService,
    ) {}

  ngOnInit() {
   this.getAllUsers();   
  }

  deleteUser(id:any){
    console.log(id)
    this.userService.deleteUser(id);
    window.location.reload();
    
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((x) => (this.listUsers = x));
  }
}
