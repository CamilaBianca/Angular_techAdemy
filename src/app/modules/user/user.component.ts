import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserSend } from 'src/app/models/userSend.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isDisables = false;
  urlRoute:any;
  idUser:any;
  @Input() userform: User;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private userService: UserService
    ) { }

  ngOnInit() {
    
    this.activatedRoute.url.subscribe((url: UrlSegment[]) => 
      this.urlRoute = url[1].path
    );

    this.activatedRoute.params.subscribe((params: Params) => 
      this.idUser = params['id']
    );

    if(this.urlRoute === 'view'){
      this.isDisables = true;
      this.getUserById(this.idUser);
    }else if(this.urlRoute === 'update'){
      this.isDisables = false;
      this.getUserById(this.idUser); 
    }else if(this.urlRoute === 'add'){
      this.isDisables = false;
      this.userform = {
        user_id: null,
        name: '',
        phoneNo: '',
        email: '',
        address: '',
        reg_date: '',
        password: '',
        uploadPhoto: '',
      }
    }
  }
  
  senform(): void {
   
     let userSend : UserSend ={
        name: this.userform.name,
        phoneNo: this.userform.phoneNo,
        email: this.userform.email,
        address: this.userform.address,
        password: this.userform.password,
        uploadPhoto: this.userform.uploadPhoto,
     } 

    if(this.urlRoute === 'update'){
      this.userService.updateUser(this.userform.user_id,userSend).subscribe();
      window.location.reload();
    }else if(this.urlRoute === 'add'){
      this.userService.addUser(userSend);
      window.location.reload();
    }
  }

  getUserById(id: any): void {
    this.userService.getUserById(id).subscribe((user) => (this.userform = user));
  }

  onFileSelected(event) {
    if(event.target.files.length > 0) 
     {
       
       this.userform.uploadPhoto = event.target.files[0].name
     }
   }
}
